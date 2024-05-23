'use server';
import postmark from 'postmark';

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const number = formData.get('number');
  const details = formData.get('details');

  let client = new postmark.ServerClient(process.env.POSTMARK_KEY as string);

  try {
    await client.sendEmailWithTemplate({
      From: 'adam@vancouverventcleaning.ca',
      To: 'adam@vancouverventcleaning.ca',
      TemplateAlias: 'estimate-email',
      TemplateModel: {
        name: name ? (name as string) : 'No name provided',
        email: email ? (email as string) : 'No email provided',
        number: number ? (number as string) : 'No number provided',
        details: details ? (details as string) : 'No details provided',
      },
      MessageStream: 'client-website-emails',
      ReplyTo: email as string,
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
