

function ImagenesPage() {
  return (
    <div>
        <h1>Imagenes</h1>

        <input type="file" name="" id="" onChange={e => console.log(e.target.files[0])}/>

    </div>
  )
}

export default ImagenesPage
