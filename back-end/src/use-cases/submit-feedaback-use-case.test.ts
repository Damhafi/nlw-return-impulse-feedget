import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy},
  { sendMail: sendMailSpy}
);

describe("Submit Feedback", () => {
  it("Espero que passe pelo submit de enviar o Feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "exemple comment",
        screenshot: "data:image/png;base64, 19d6w51d65awd1awd1",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("Passe pelo teste e enviar um resposta se caso não tiver um -> ' TYPE ' selecionado", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "exemple comment",
        screenshot: "data:image/png;base64, 19d6w51d65awd1awd1",
      })
    ).rejects.toThrow();
  });

  it("Passe pelo teste e enviar um resposta se caso não tiver um -> ' COMMENT ' selecionado", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64, 19d6w51d65awd1awd1",
      })
    ).rejects.toThrow();
  });

  it("Passe pelo teste e enviar um resposta se caso não tiver um -> ' SCREENSHOT ' inválida", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "ta tudo bugado",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
