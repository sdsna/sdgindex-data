import { getLongTermObjectiveReason } from "@root/assessments";
import { buildIndicator } from "testHelpers/builders";

test("Returns the long term objectif reason from an indicator", () => {
  expect(
    getLongTermObjectiveReason(
      buildIndicator({ longTermObjectiveReason: "SDG Target" })
    )
  ).toMatch(/SDG Target/);
});
