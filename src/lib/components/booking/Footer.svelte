<script>
    import Container from "../layout/Container.svelte";
</script>

<footer class="footer-mobile">
  <Container>
    <div class="bottom">
      <div class="left">
        <p>© 2025 On-Journey</p>
        <p> </p>

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
  .footer-mobile {
    padding: 30px 62px 0px;
    font-size: 12px;
    align-items: center;
    color: #000;
    background-color: #ffffff;
    border-top: 1px solid #e2e2e2;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap; 
  }

  .left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 12px;
    color: #000;
    justify-content: space-between;
  }

  .links a {
    color: #000;
    text-decoration: none;
  }

  .instagram img {
    width: 20px;
  }

  .links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .footer-mobile {
      padding: 0 16px;
      margin: 16px auto;
    }
  }
</style>