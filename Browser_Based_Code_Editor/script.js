function runCode() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const js = document.getElementById("jsCode").value;

  const output = document.getElementById("output").contentWindow.document;
  
  output.open();
  output.write(`
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `);
  output.close();
}

function clearCode() {
  document.getElementById("htmlCode").value = "";
  document.getElementById("cssCode").value = "";
  document.getElementById("jsCode").value = "";
}

function downloadCode() {
  const html = document.getElementById("htmlCode").value;
  const css = document.getElementById("cssCode").value;
  const js = document.getElementById("jsCode").value;

  const blob = new Blob(
    [`<style>${css}</style>\n${html}\n<script>${js}<\/script>`],
    { type: "text/html" }
  );

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "code.html";
  link.click();
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}