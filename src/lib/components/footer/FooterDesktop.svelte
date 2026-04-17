<script>
    import Container from '$lib/components/layout/Container.svelte'
</script>

<footer class="footer">
  <Container>
    <div class="top">
      <div class="col">
        <h4>Support</h4>
        <ul>
          <li><a href="/">Help Center</a></li>
          <li><a href="/">Safety Information</a></li>
          <li><a href="/">Cancellation Options</a></li>
          <li><a href="/">COVID-19 Regulations</a></li>
        </ul>
      </div>

      <div class="col">
        <h4>Partnership</h4>
        <ul>
          <li><a href="/">Become a Travel Agent</a></li>
          <li><a href="/">Local Transport</a></li>
          <li><a href="/">Community Forum</a></li>
        </ul>
      </div>

      <div class="col">
        <h4>About</h4>
        <ul>
          <li><a href="/">Blog</a></li>
          <li><a href="/">New Features</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Investor</a></li>
        </ul>
      </div>

      <div class="col">
        <h4>Downloads App</h4>
        <p>Ready for your journey?</p>

        <div class="stores">
          <img src="/src/lib/assets/google-play.png" alt="Google Play" />
          <img src="/src/lib/assets/app-store.png" alt="App Store" />
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="left">
        <p>© 2023 On-Journey</p>
        <p>·</p>

        <div class="links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
        </div>        
      </div>


      <a class="instagram" href="/">
        <img src="/src/lib/assets/instagram.png" alt="Instagram" />
      </a>
    </div>
  </Container>
</footer>    


<style>
    .footer {
    background: #ffffff;
    border-top: 1px solid #eeeeee;
    margin-top: 80px;
    }

    .top {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px;
    padding: 28px 32px;
    }

    .col h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    }

    .col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 68px;
    }

    .col li {
    margin-bottom: 18px;
    }

    .col a {
    color: #333;
    text-decoration: none;
    font-size: 15px;
    }

    .col a:hover {
    text-decoration: underline;
    }

    .col p {
    font-size: 15px;
    margin-bottom: 20px;
    }

    .stores {
    display: flex;
    gap: 12px;
    }

    .stores img {
    height: 32px;
    cursor: pointer;
    }

    .bottom {
    border-top: 1px solid #e2e2e2;
    margin: 0 30px;
    padding: 35px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    }

    .bottom p {
    font-size: 13px;
    }

    .left {
    display: flex;
    align-items: center;
    gap: 16px;
    }

    .links {
    display: flex;
    gap: 24px;
    }

    .links a {
    font-size: 14px;
    color: #282828;
    text-decoration: none;
    }

    .links a:hover {
    text-decoration: underline;
    }

    .instagram img {
    width: 26px;
    }
</style>