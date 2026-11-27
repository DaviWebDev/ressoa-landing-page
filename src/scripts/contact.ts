const frm = document.querySelector<HTMLFormElement>("[data-js='form']");
const nameInput = document.querySelector<HTMLInputElement>(
  "[data-js='name-raw']",
);
const emailInput = document.querySelector<HTMLInputElement>(
  "[data-js='email-raw']",
);
const radioOptions = document.querySelector<HTMLDivElement>(
  "[data-js='radio-options']",
);
const msgName = document.querySelector<HTMLParagraphElement>(
  "[data-js='msg-name']",
);
const msgEmail = document.querySelector<HTMLParagraphElement>(
  "[data-js='msg-email']",
);
const msgGeneral = document.querySelector<HTMLParagraphElement>(
  "[data-js='msg-general']",
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameCharactersRegex = /^[\p{L}\p{M}' -]+$/u;
const namePartRegex = /^[\p{L}\p{M}]+$/u;
let hasAttemptedSubmit = false;

function setMessage(
  element: HTMLParagraphElement | null,
  message: string,
  type?: "alert" | "error",
) {
  if (!element) return;

  element.textContent = message;
  element.classList.remove("alert", "error");
  if (type) element.classList.add(type);
}

function validateName(content: string, showRequiredMessage = true) {
  const value = content.trim();
  const nameParts = value.split(/[ '-]/);

  if (!value) {
    if (showRequiredMessage) {
      setMessage(
        msgName,
        "Insira um nome antes de concluir o processo.",
        "alert",
      );
    } else {
      setMessage(msgName, "");
    }
    return false;
  }

  if (
    !nameCharactersRegex.test(value) ||
    !nameParts.every((part) => namePartRegex.test(part))
  ) {
    setMessage(msgName, "Nome inválido. Por favor, tente novamente.", "error");
    return false;
  }

  setMessage(msgName, "");
  return true;
}

function validateEmail(content: string, showRequiredMessage = true) {
  const value = content.trim();

  if (!value) {
    if (showRequiredMessage) {
      setMessage(
        msgEmail,
        "Preencha o email antes de concluir o processo.",
        "alert",
      );
    } else {
      setMessage(msgEmail, "");
    }
    return false;
  }

  if (!emailRegex.test(value)) {
    setMessage(
      msgEmail,
      "Formato de email inválido. Por favor, tente novamente.",
      "error",
    );
    return false;
  }

  setMessage(msgEmail, "");
  return true;
}

function getMissingRequirements() {
  const missing: string[] = [];

  if (!nameInput?.value.trim()) missing.push("informar seu nome");
  if (!emailInput?.value.trim()) missing.push("informar seu e-mail");
  if (!radioOptions?.querySelector("input[name='option']:checked")) {
    missing.push("selecionar um espaço");
  }

  return missing;
}

function formatList(items: string[]) {
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}

function updateGeneralMessage() {
  if (!hasAttemptedSubmit) return;

  const missing = getMissingRequirements();

  if (missing.length === 3) {
    setMessage(
      msgGeneral,
      "Preencha o nome e o e-mail e selecione um espaço antes de continuar.",
      "alert",
    );
  } else if (missing.length > 0) {
    setMessage(
      msgGeneral,
      `Para continuar, é necessário ${formatList(missing)}.`,
      "alert",
    );
  } else {
    setMessage(msgGeneral, "");
  }
}

nameInput?.addEventListener("blur", () => {
  validateName(nameInput.value, !hasAttemptedSubmit);
});

nameInput?.addEventListener("input", () => {
  updateGeneralMessage();
});

emailInput?.addEventListener("blur", () => {
  validateEmail(emailInput.value, !hasAttemptedSubmit);
});

emailInput?.addEventListener("input", () => {
  updateGeneralMessage();
});

radioOptions?.addEventListener("change", () => {
  updateGeneralMessage();
});

frm?.addEventListener("submit", (event) => {
  event.preventDefault();
  hasAttemptedSubmit = true;

  const isNameValid = nameInput ? validateName(nameInput.value, false) : false;
  const isEmailValid = emailInput
    ? validateEmail(emailInput.value, false)
    : false;
  const hasSelectedOption = Boolean(
    radioOptions?.querySelector("input[name='option']:checked"),
  );

  updateGeneralMessage();

  if (!isNameValid) {
    nameInput?.focus();
  } else if (!isEmailValid) {
    emailInput?.focus();
  } else if (!hasSelectedOption) {
    radioOptions
      ?.querySelector<HTMLInputElement>("input[name='option']")
      ?.focus();
  }
});
