

class Form {

  constructor(document, className) {

    if (document && document.readyState) {
      this.document = document
      this.className = className
      this.children = []
    } else {
      throw new Error("Document is needed")
    }
  }

  createButton(data) {
    const newButton = this.document.createElement("button")
    let content
    if (data.text) {
      content = this.document.createTextNode(data.text)
    } else {
      content = this.document.createTextNode("click")
    }
    newButton.appendChild(content)
    if (data.class) {
      newButton.setAttribute("class", data.class);
    }
    this.children.push(newButton)
  }

  run() {
    const body = this.document.getElementsByTagName("body")[0]
    const form = this.document.createElement("form")
    if (this.children.length) {
      this.children.forEach(el => {
        console.log('++2', el)
        form.appendChild(el)
      })
    }

    body.appendChild(form)
  }

}

const myForm = new Form(document, 'zljvbz')
const buttonData = {
  text: "click me",
  class: "btn"
}
myForm.createButton(buttonData)

myForm.run()

