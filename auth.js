const msg = document.getElementById("msg");

async function signup() {
  msg.innerText = "جاري إنشاء الحساب...";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    msg.innerText = "يرجى إدخال الإيميل وكلمة المرور";
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    msg.innerText = error.message;
    return;
  }

  msg.innerText = "✅ تم إنشاء الحساب، يمكنك تسجيل الدخول الآن";
}

async function login() {
  msg.innerText = "جاري تسجيل الدخول...";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    msg.innerText = error.message;
    return;
  }

  // نجاح
  window.location.href = "home.html";
}
