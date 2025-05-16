import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './InvoiceAdmin.css';

const correctPassword = "mySecret123";

const InvoiceAdmin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    logo: '',
    abn: '',
    client: '',
    items: [{ description: '', quantity: 1, price: 0 }]
  });

  const [total, setTotal] = useState(0);
  const invoiceRef = useRef(null);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = field === 'description' ? value : Number(value);
    setFormData({ ...formData, items: newItems });
    const newTotal = newItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    setTotal(newTotal);
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: '', quantity: 1, price: 0 }]
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadPDF = async () => {
    const input = invoiceRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('invoice.pdf');
  };

  if (!authenticated) {
    return (
      <div className="invoice-auth">
        <h2>Enter Admin Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }

  return (
    <div className="invoice-admin">
      <h2>Invoice Generator</h2>
      <input type="text" name="logo" placeholder="Company Logo URL" onChange={handleChange} />
      <input type="text" name="abn" placeholder="ABN Number" onChange={handleChange} />
      <input type="text" name="client" placeholder="Client Name" onChange={handleChange} />

      <h3>Items</h3>
      {formData.items.map((item, index) => (
        <div key={index} className="invoice-item">
          <input
            type="text"
            placeholder="Description"
            value={item.description}
            onChange={(e) => handleItemChange(index, 'description', e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleItemChange(index, 'price', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>

      <div className="invoice-summary">
        <h4>Total: ${total.toFixed(2)}</h4>
        <button onClick={downloadPDF}>Download PDF</button>

        <hr />
        <div className="invoice-preview" ref={invoiceRef}>
          {formData.logo && <img src={formData.logo} alt="Logo" height="50" />}
          <p><strong>ABN:</strong> {formData.abn}</p>
          <p><strong>Client:</strong> {formData.client}</p>
          <ul>
            {formData.items.map((item, i) => (
              <li key={i}>
                {item.description} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceAdmin;
