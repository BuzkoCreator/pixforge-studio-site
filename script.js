document.getElementById('year').textContent=new Date().getFullYear();
const dl=document.getElementById('download-button');
const note=document.getElementById('download-note');
dl.addEventListener('click',function(e){
  const path='downloads/PixForgeStudio.zip';
  fetch(path,{method:'HEAD'}).then(r=>{
    if(!r.ok){e.preventDefault();note.textContent='Файл ещё не добавлен. Сначала загрузите ZIP программы в папку downloads.';}
  }).catch(()=>{e.preventDefault();note.textContent='Добавьте файл PixForgeStudio.zip в папку downloads перед публикацией.';});
});
