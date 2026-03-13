import zxcvbn from "zxcvbn";

export const getPasswordStrengthValue = (password: string): number => {
  if (!password) return 0;
  const result = zxcvbn(password);
  const WEEK_PASSWORD_SCORE = result.score <= 1;
  const MEDIUM_PASSWORD_SCORE = result.score <= 3;
  const STRONG_PASSWORD_SCORE = result.score >= 3;

  const values = {
    WEEK_PASSWORD_SCORE: 30,
    MEDIUM_PASSWORD_SCORE: 60,
    STRONG_PASSWORD_SCORE: 100,
  };

  if (WEEK_PASSWORD_SCORE) {
    return values.WEEK_PASSWORD_SCORE;
  } else if (MEDIUM_PASSWORD_SCORE) {
    return values.MEDIUM_PASSWORD_SCORE;
  } else if (STRONG_PASSWORD_SCORE) {
    return values.STRONG_PASSWORD_SCORE;
  }
  return values.STRONG_PASSWORD_SCORE;
};
