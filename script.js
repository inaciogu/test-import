async function sendCsvFile() {
  const input = document.querySelector('#csv-file');
  const url = 'http://localhost:3000/api/files';
  console.log(input.files[0])

  const formData = new FormData();
  formData.append('file', input.files[0]);

  console.log(formData)

  await fetch(url, {
    method: 'POST',
    body: formData,
  });
}
