<template>
  <div class="page">
    <form class="language-form">
      <div class="form-group">
        <label>Language</label>
        <input v-model="newlanguage.name" type="text" />
      </div>
      <div class="form-group">
        <label>Voicenotes</label>
        <div class="columns">
          <input v-model="newlanguage.voicenotes[0]" type="text" />
          <input v-model="newlanguage.voicenotes[1]" type="text" />
          <input v-model="newlanguage.voicenotes[2]" type="text" />
        </div>
      </div>
      <div class="form-group">
        <label>Broadcasts</label>
        <div class="columna">
          <textarea v-model="newlanguage.broadcasts[0]" rows="10" />
          <textarea v-model="newlanguage.broadcasts[1]" rows="10" />
          <textarea v-model="newlanguage.broadcasts[2]" rows="10" />
        </div>
      </div>
    </form>
    <button class="add-button" @click="add()">Add</button>

    <code class="code">
      <pre> {{ languages }}</pre>
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newlanguage: {
        name: '',
        voicenotes: ['', '', ''],
        broadcasts: ['', '', ''],
      },
      languages: [],
    }
  },
  methods: {
    add() {
      this.languages.push(this.newlanguage)
      this.newlanguage = {
        name: '',
        voicenotes: ['', '', ''],
        broadcasts: ['', '', ''],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 150px;
  font-size: 1.4rem;
}

.language-form {
  padding: 30px;
  border: 1px solid black;

  label {
    width: 100px;
    display: inline-block;
    margin-right: 20px;
  }

  input,
  textarea {
    width: 300px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
  }
}

.form-group {
  margin: 10px;
  display: flex;
  align-items: center;
}

.add-button {
  margin-top: 20px;
}

.code {
  display: block;
  padding: 15px;
  border: 1px solid black;
  background-color: $color-gray;
  margin-top: 150px;
}

pre {
  white-space: pre-wrap;
}
</style>
