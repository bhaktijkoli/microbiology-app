<template>
  <div class="login-box">
    <div class="login-logo">
      <a href=""><b>Microbiology</b> Lab</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <form action="../../index2.html" method="post">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Username">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
        </div>
      </form>
    </div>
    <!-- /.login-box-body -->
  </div>
  <!-- /.login-box -->
</template>

<script>
export default {
  name: 'login-page',
  mounted() {
    document.title = "Microbiology Lab - Login"
    $('body').toggleClass('hold-transition login-page');
  },
  methods: {
  }
}
</script>
<style>

</style>
