import { omit } from "lodash";
import { getSpilloverAssessment } from "@root";
import {
  buildAssessment,
  buildIndicators,
  buildGoals,
} from "testHelpers/builders";

const spilloverAssessment = buildAssessment({ id: "SPI" });
const dataStore = {
  assessments: [spilloverAssessment, ...buildGoals(), ...buildIndicators()],
};

test("Returns spillover assessment from the dataStore", () => {
  expect(getSpilloverAssessment(dataStore)).toEqual(spilloverAssessment);
});

test("Includes observation for indicator", () => {
  expect(getSpilloverAssessment(dataStore)).toMatchObject(
    omit(spilloverAssessment, "id")
  );
});
