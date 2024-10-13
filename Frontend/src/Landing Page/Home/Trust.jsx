function Trust() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="mb-5">Trust with confidence</h1>
            <h4 className="fs-5">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h4 className="fs-5">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h4 className="fs-5">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4 className="fs-5">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6" style={{display:"flext",alignItems:"center",alignContent:"center"}}>
            <img style={{width:"90%"}} src="/media/images/ecosystem.png" alt="" />
          </div>
        </div>
        <div className="row">
            <img className="col-8 offset-2" src="/media/images/press-logos.png" alt="" />
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Trust;