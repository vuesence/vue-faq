# Contribute to the development of this resource

<p>You can suggest corrections to any or add a new Q/A using the form below.</p>
<p>GitHub way of making changes (<i>fork -> edit -> create PR</i>) is also very welcome.</p>

<div class="form-container" action="action_page.php">
  <label for="fname">Your name and/or contacts (optional)</label>
  <input id="fname" v-model="form.name" type="text" name="firstname" placeholder="" />
  <label for="subject">Question/answer or message</label>
  <textarea id="subject" v-model="form.message" name="subject" placeholder=""></textarea>
  <label for="check">Enter the word "vue"</label>
  <input id="check" v-model="form.check" type="text" name="check" placeholder="" />
  <input ref="submit" type="submit" value="Submit" @click="submitForm" />
</div>

<script setup>
import { ref } from "vue";
// import Message from "vue-m-message";
// import SectionHeader from "../components/SectionHeader.vue";
// import { sendMessage } from "@/utils/messaging";
// import "vue-m-message/dist/style.css";

const submit = ref();
const form = ref({ name: "", email: "", message: "", check: "" });

async function submitForm() {
  submit.value.setAttribute("disabled", true);
  if (form.value.check === "vue") {
    const text = `Message from Vue FAQ:\n\n\n
      Name:${form.value.name}\n
      ${form.value.message}`;

    const response = await fetch(
      "https://api.telegram.org/bot5025156465:AAGb9Ke5_Xv8cJRRt9sjv_ZfLyHPkQ224rE/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
          chat_id: "333530662",
          text,
        }),
      },
    );
    if (response) {
      form.value = { name: "", email: "", message: "", check: "" }
    }
  }
  else {
    alert("Incorrect check word");
  }

  submit.value.removeAttribute("disabled");
}
</script>

<style>
.form-container {
  border-radius: 5px;
  padding: 20px 0;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  outline-color: #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  transition: 0.8s;
}

input[type="text"]:focus,
textarea:focus,
input[type="text"]:focus-visible,
textarea:focus-visible {
  outline-color: #6e478e;
}
textarea {
  height: 200px;
}

  /* Style the submit button with a specific background color etc */
input[type="submit"] {
  background-color: #45166b;
  color: white;
  font-size: 1.1em;
  padding: 12px 20px;
  margin-top: 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

input[type="submit"]:hover {
  background-color: #6e478e;
}

input[type="submit"]&[disabled] {
  opacity: 0.5;
  cursor: unset;
}

input[type="submit"]&[disabled]:hover {
  background-color: #45166b;
}
</style>
