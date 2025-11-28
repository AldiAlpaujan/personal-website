import PageHeader from '@/components/PageHeader';
import ContactForm from './components/ContactForm';
import SocialMedia from './components/SocialMedia';

export default function Contact() {
  return (
    <>
      <PageHeader
        title={'Contact'}
        description={'Have a question or collaboration idea? Get in touch with me.'}
        hideContactButton
      />
      <SocialMedia />
      <ContactForm />
    </>
  );
}
