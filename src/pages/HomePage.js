import CardOption from '../components/CardOption';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>What can I help you with today?</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', gap: '20px' }}>
        <CardOption
          title="Fill a Form"
          description="Use a simple guided form to ask your question."
          route="/form"
        />
        <CardOption
          title="Talk to Assistant"
          description="Get help from our friendly assistant."
          route="/assistant"
        />
      </div>
    </div>
  );
}

export default HomePage;
