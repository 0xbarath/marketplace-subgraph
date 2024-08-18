import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ListingCreated } from "../generated/schema"
import { ListingCreated as ListingCreatedEvent } from "../generated/Contract/Contract"
import { handleListingCreated } from "../src/contract"
import { createListingCreatedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let loanId = BigInt.fromI32(234)
    let borrower = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let assetContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let assetTokenId = BigInt.fromI32(234)
    let loanAmount = BigInt.fromI32(234)
    let repayAmount = BigInt.fromI32(234)
    let loanDuration = BigInt.fromI32(234)
    let newListingCreatedEvent = createListingCreatedEvent(
      loanId,
      borrower,
      assetContract,
      assetTokenId,
      loanAmount,
      repayAmount,
      loanDuration
    )
    handleListingCreated(newListingCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ListingCreated created and stored", () => {
    assert.entityCount("ListingCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ListingCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "loanId",
      "234"
    )
    assert.fieldEquals(
      "ListingCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrower",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ListingCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetContract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ListingCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetTokenId",
      "234"
    )
    assert.fieldEquals(
      "ListingCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "loanAmount",
      "234"
    )
    assert.fieldEquals(
      "ListingCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "repayAmount",
      "234"
    )
    assert.fieldEquals(
      "ListingCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "loanDuration",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
