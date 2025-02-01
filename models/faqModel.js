import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    translations: {
      question_hi: String,
      answer_hi: String,
      question_bn: String,
      answer_bn: String,
      // we can create more language as you need
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
// function to revtrive faqs
faqSchema.methods.getTranslatedFAQ = function (lang) {
  const translationKey = `question_${lang}`;
  const answerKey = `answer_${lang}`;
  return {
    question: this.translations?.[translationKey] || this.question,
    answer: this.translations?.[answerKey] || this.answer,
  };
};

export default mongoose.model("faq", faqSchema);
