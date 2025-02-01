import { translate } from "@vitalets/google-translate-api";

const trans = async (text, language) => {
  try {
    const res = await translate(text, { to: language });
    return res.text;
  } catch (err) {
    console.log("error in the translation", err);
    return text;
  }
};

export default trans;
