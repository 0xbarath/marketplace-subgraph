import {
    ListingCreated,
    LoanCreated,
    LoanLTVDefault,
    LoanMarketplace,
    LoanRepaid,
    OfferCreated,
    LoanRepaymentDefaulted as LoanRepaymentDefaultedEvent,
    LoanLiquidated as LoanLiquidatedEvent,
} from "../generated/LoanMarketplace/LoanMarketplace"
import {Listing, Loan, Offer} from "../generated/schema";
import {Address, BigInt, Bytes} from "@graphprotocol/graph-ts";

export function handleListingCreated(event: ListingCreated): void {
    let listing = Listing.load(Bytes.fromI32(event.params.listingId.toI32()))
    if (listing) {
        return
    }
    listing = new Listing(Bytes.fromI32(event.params.listingId.toI32()))
    listing.borrower = event.params.borrower
    listing.assetContract = event.params.assetContract
    listing.assetTokenId = event.params.assetTokenId
    listing.loanAmount = event.params.loanAmount
    listing.repayAmount = event.params.repayAmount
    listing.loanDuration = event.params.loanDuration
    listing.maxLTV = event.params.maxLTV
    listing.save()
}

export function handleOfferCreated(event: OfferCreated): void {
    let offer = Offer.load(Bytes.fromI32(event.params.offerId.toI32()))
    if (offer) {
        return
    }
    let listing = Listing.load(Bytes.fromI32(event.params.listingId.toI32()))
    if (!listing) {
        return
    }
    offer = new Offer(Bytes.fromI32(event.params.offerId.toI32()))
    offer.lender = event.params.lender
    offer.borrower = event.params.borrower
    offer.assetContract = event.params.assetContract
    offer.assetTokenId = event.params.assetTokenId
    offer.loanAmount = event.params.loanAmount
    offer.repayAmount = event.params.repayAmount
    offer.loanDuration = event.params.loanDuration
    offer.maxLTV = event.params.maxLTV
    offer.listing = listing.id
    offer.save()
}

export function handleLoanCreated(event: LoanCreated): void {
    let loan = Loan.load(Bytes.fromI32(event.params.loanId.toI32()))
    if (loan) {
        return
    }
    let offer = Offer.load(Bytes.fromI32(event.params.offerId.toI32()))
    if (!offer) {
        return
    }
    let marketplace = LoanMarketplace.bind(event.address)
    let loanFromContract = marketplace.loans(event.params.loanId)
    loan = new Loan(Bytes.fromI32(event.params.loanId.toI32()))
    loan.lender = loanFromContract.getLender()
    loan.borrower = loanFromContract.getBorrower()
    loan.assetContract = loanFromContract.getAssetContract()
    loan.assetTokenId = loanFromContract.getAssetTokenId()
    loan.loanAmount = loanFromContract.getLoanAmount()
    loan.repayAmount = loanFromContract.getRepayAmount()
    loan.maxLTV = loanFromContract.getMaxLTV()
    loan.loanStartTime = loanFromContract.getLoanStartTime()
    loan.loanEndTime = loanFromContract.getLoanEndTime()
    loan.status = loanFromContract.getStatus()
    loan.offer = offer.id
    loan.save()
}

export function handleLoanRepay(event: LoanRepaid): void {
    updateLoanStatus(event.params.loanId, event.address)
}

export function handleLoanRepaid(event: LoanRepaid): void {
    updateLoanStatus(event.params.loanId, event.address)
}

export function handleLoanLTVDefault(event: LoanLTVDefault): void {
    updateLoanStatus(event.params.loanId, event.address)
}

export function handleLoanRepaymentDefaulted(event: LoanRepaymentDefaultedEvent): void {
    updateLoanStatus(event.params.loanId, event.address)
}

export function handleLoanLiquidated(event: LoanLiquidatedEvent): void {
    updateLoanStatus(event.params.loanId, event.address)

}

export function updateLoanStatus(
    loanId: BigInt,
    marketplaceAddress: Address
) : void {
    let loan = Loan.load(Bytes.fromI32(loanId.toI32()))
    if (!loan) {
        return
    }
    let marketplace = LoanMarketplace.bind(marketplaceAddress)
    let loanFromContract = marketplace.loans(loanId)
    loan.status = loanFromContract.getStatus()
    loan.save()
}