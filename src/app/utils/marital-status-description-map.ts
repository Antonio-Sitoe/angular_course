import { MaritalStatusEnum } from "../enums/marital-status.enum";

export const MARITAL_STATUS_DESCRIPTION_MAP: { [key: number]: string } = {
  [MaritalStatusEnum.SINGLE]: "Solteiro",
  [MaritalStatusEnum.MARRIED]: "Casado",
  [MaritalStatusEnum.DIVORCED]: "Divorciado",
};

export const MARITAL_STATUS_OPTIONS = Object.entries(
  MARITAL_STATUS_DESCRIPTION_MAP
).map(([value, label]) => ({ value: Number(value), label }));
