import { getQuestions } from '@/server/db/getquestions'
import Form from './_components/Form'
import QuestionItem from './_components/questionItem';

const page = async () => {
    const questions = await getQuestions({ role: "admin", locale: "en" });
  return (
    <main>
        <section className="section-gap">

        <div className="container">
          <div className="sm:max-w-[625px] mx-auto space-y-6">
            <Form />
          </div>
          <QuestionItem question={questions} /> 
          </div>
        </section>
    </main>
  )
}

export default page
