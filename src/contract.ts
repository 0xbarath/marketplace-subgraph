import {
  ListingCreated as ListingCreatedEvent,
  LoanCreated as LoanCreatedEvent,
  LoanLTVDefault as LoanLTVDefaultEvent,
  LoanLiquidated as LoanLiquidatedEvent,
  LoanMarketplaceCreated as LoanMarketplaceCreatedEvent,
  LoanRepaid as LoanRepaidEvent,
  LoanRepaymentDefaulted as LoanRepaymentDefaultedEvent,
  OfferCreated as OfferCreatedEvent
} from "../generated/Contract/Contract"
import {
  ListingCreated,
  LoanCreated,
  LoanLTVDefault,
  LoanLiquidated,
  LoanMarketplaceCreated,
  LoanRepaid,
  LoanRepaymentDefaulted,
  OfferCreated
} from "../generated/schema"

export function handleListingCreated(event: ListingCreatedEvent): void {
  let entity = new ListingCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.borrower = event.params.borrower
  entity.assetContract = event.params.assetContract
  entity.assetTokenId = event.params.assetTokenId
  entity.loanAmount = event.params.loanAmount
  entity.repayAmount = event.params.repayAmount
  entity.loanDuration = event.params.loanDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanCreated(event: LoanCreatedEvent): void {
  let entity = new LoanCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanLTVDefault(event: LoanLTVDefaultEvent): void {
  let entity = new LoanLTVDefault(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanLiquidated(event: LoanLiquidatedEvent): void {
  let entity = new LoanLiquidated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanMarketplaceCreated(
  event: LoanMarketplaceCreatedEvent
): void {
  let entity = new LoanMarketplaceCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanMarketplace = event.params.loanMarketplace

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanRepaid(event: LoanRepaidEvent): void {
  let entity = new LoanRepaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanRepaymentDefaulted(
  event: LoanRepaymentDefaultedEvent
): void {
  let entity = new LoanRepaymentDefaulted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferCreated(event: OfferCreatedEvent): void {
  let entity = new OfferCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.loanId = event.params.loanId
  entity.lender = event.params.lender
  entity.borrower = event.params.borrower
  entity.assetContract = event.params.assetContract
  entity.assetTokenId = event.params.assetTokenId
  entity.loanAmount = event.params.loanAmount
  entity.repayAmount = event.params.repayAmount
  entity.loanDuration = event.params.loanDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
