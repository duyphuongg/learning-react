import {useState, useMemo, useRef} from 'react'
function LearnUseMemo() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [product, setProduct] = useState([])

  const nameRef = useRef();

  const handleAddProduct = () => {
    setProduct([...product, {
      name,
      price: +price
    }])
    setName("")
    setPrice("")
    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = product.reduce((res, prod) => {
      console.log("Tinsh toan");
      return res + prod.price
    }, 0)
    return result
  }, [product])


  return (
    <div className="wrap">
      Product name:
      <input
        ref={nameRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Product price:
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      Total : {total}
      <ul>
        {
          product.map((item, index) => (
            <li key={index}>
              {item.name} --- {item.price}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default LearnUseMemo;