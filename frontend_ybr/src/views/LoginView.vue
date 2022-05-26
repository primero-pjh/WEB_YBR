<template>
  <div class="row" style="margin-top: 74px;">
    <div class="col" style="position: relative; ">
      <div class="text-center" style="position: relative; top: 50%; transform: translate(0, -50%);">
        <q-img src="@/assets/logo.png" style="width: 300px;" />
      </div>
    </div>
    <div class="col">
      <div style="width: 480px; height: 600px;" class="q-pl-md">
        <q-card style="padding: 60px 70px;">
          <q-card-section>
            <p style="font-size: 33px; margin: 0;">WEB_YBR</p>
          </q-card-section>

          <q-card-section>
            <q-input outlined v-model="form.userId" dense placeholder="아이디" class="q-mb-sm" @keyup.enter="handleLogin"
                    :error="form_error.userId.length > 0" :error-message="form_error.userId">
            </q-input>
            <q-input outlined v-model="form.password" dense placeholder="비밀번호" class="q-mb-sm" @keyup.enter="handleLogin"
                      :error="form_error.password.length > 0" :error-message="form_error.password" type="password">
            </q-input>
            <q-checkbox right-label v-model="auto_login" class="q-mb-md"
                    label="자동 로그인">

            </q-checkbox>
            <q-btn label="로그인" color="primary" style="width: 100%;" @click="handleLogin"></q-btn>
          </q-card-section>
          <q-card-section>
            <div class="row">
                <a href="/signup">회원가입</a>
                <q-space></q-space>
                <a href="/signup">아이디/비밀번호 찾기</a>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        userId: '',
        password: '',
      },
      form_error: {
        userId: '',
        password: '',
      },

      auto_login: false,
    }
  },
  methods: {
    handleLogin() {
    },
  },
  mounted: function() {

  }
}
</script>
