import { omit } from "lodash";
import { getObservationsForAssessment } from "@root";
import {
  buildAssessment,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const assessment = buildAssessment();
const observation = buildObservation({
  assessment: assessment,
});
const dataStore = {
  observations: [observation, ...buildObservations()],
};

test("Returns an array of the observations for the specific assessment", () => {
  expect(getObservationsForAssessment(dataStore, assessment)[0]).toMatchObject(
    observation
  );
});

test("Includes observation for region", () => {
  expect(getObservationsForAssessment(dataStore, assessment)[0]).toMatchObject(
    omit(observation, "id")
  );
});
