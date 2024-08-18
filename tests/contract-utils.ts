import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ListingCreated,
  LoanCreated,
  LoanLTVDefault,
  LoanLiquidated,
  LoanMarketplaceCreated,
  LoanRepaid,
  LoanRepaymentDefaulted,
  OfferCreated
} from "../generated/Contract/Contract"

export function createListingCreatedEvent(
  loanId: BigInt,
  borrower: Address,
  assetContract: Address,
  assetTokenId: BigInt,
  loanAmount: BigInt,
  repayAmount: BigInt,
  loanDuration: BigInt
): ListingCreated {
  let listingCreatedEvent = changetype<ListingCreated>(newMockEvent())

  listingCreatedEvent.parameters = new Array()

  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetContract",
      ethereum.Value.fromAddress(assetContract)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenId",
      ethereum.Value.fromUnsignedBigInt(assetTokenId)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanAmount",
      ethereum.Value.fromUnsignedBigInt(loanAmount)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanDuration",
      ethereum.Value.fromUnsignedBigInt(loanDuration)
    )
  )

  return listingCreatedEvent
}

export function createLoanCreatedEvent(loanId: BigInt): LoanCreated {
  let loanCreatedEvent = changetype<LoanCreated>(newMockEvent())

  loanCreatedEvent.parameters = new Array()

  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanCreatedEvent
}

export function createLoanLTVDefaultEvent(loanId: BigInt): LoanLTVDefault {
  let loanLtvDefaultEvent = changetype<LoanLTVDefault>(newMockEvent())

  loanLtvDefaultEvent.parameters = new Array()

  loanLtvDefaultEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanLtvDefaultEvent
}

export function createLoanLiquidatedEvent(loanId: BigInt): LoanLiquidated {
  let loanLiquidatedEvent = changetype<LoanLiquidated>(newMockEvent())

  loanLiquidatedEvent.parameters = new Array()

  loanLiquidatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanLiquidatedEvent
}

export function createLoanMarketplaceCreatedEvent(
  loanMarketplace: Address
): LoanMarketplaceCreated {
  let loanMarketplaceCreatedEvent = changetype<LoanMarketplaceCreated>(
    newMockEvent()
  )

  loanMarketplaceCreatedEvent.parameters = new Array()

  loanMarketplaceCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanMarketplace",
      ethereum.Value.fromAddress(loanMarketplace)
    )
  )

  return loanMarketplaceCreatedEvent
}

export function createLoanRepaidEvent(loanId: BigInt): LoanRepaid {
  let loanRepaidEvent = changetype<LoanRepaid>(newMockEvent())

  loanRepaidEvent.parameters = new Array()

  loanRepaidEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanRepaidEvent
}

export function createLoanRepaymentDefaultedEvent(
  loanId: BigInt
): LoanRepaymentDefaulted {
  let loanRepaymentDefaultedEvent = changetype<LoanRepaymentDefaulted>(
    newMockEvent()
  )

  loanRepaymentDefaultedEvent.parameters = new Array()

  loanRepaymentDefaultedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanRepaymentDefaultedEvent
}

export function createOfferCreatedEvent(
  loanId: BigInt,
  lender: Address,
  borrower: Address,
  assetContract: Address,
  assetTokenId: BigInt,
  loanAmount: BigInt,
  repayAmount: BigInt,
  loanDuration: BigInt
): OfferCreated {
  let offerCreatedEvent = changetype<OfferCreated>(newMockEvent())

  offerCreatedEvent.parameters = new Array()

  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetContract",
      ethereum.Value.fromAddress(assetContract)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenId",
      ethereum.Value.fromUnsignedBigInt(assetTokenId)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanAmount",
      ethereum.Value.fromUnsignedBigInt(loanAmount)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanDuration",
      ethereum.Value.fromUnsignedBigInt(loanDuration)
    )
  )

  return offerCreatedEvent
}
