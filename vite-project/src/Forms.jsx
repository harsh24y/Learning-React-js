import { useState } from "react";

function Forms() {
  const [formData, setFormData] = useState({
    text: '',
    checkbox: false,
    radio: '',
    select: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="form-container p-6 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Form Example App</h1>
      <form className="space-y-4">
        <div className="form-field">
          <label>Text:</label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="border px-2 py-1 w-full"
          />
        </div>

        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
              className="mr-2"
            />
            Checkbox
          </label>
        </div>

        <div className="form-field">
          <label>Radio:</label><br />
          <label>
            <input
              type="radio"
              name="radio"
              value="Option 1"
              checked={formData.radio === "Option 1"}
              onChange={handleChange}
              className="mr-1"
            />
            Option 1
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="radio"
              value="Option 2"
              checked={formData.radio === "Option 2"}
              onChange={handleChange}
              className="mr-1"
            />
            Option 2
          </label>
        </div>

        <div className="form-field">
          <label>Select:</label>
          <select
            name="select"
            value={formData.select}
            onChange={handleChange}
            className="block w-full border px-2 py-1"
          >
            <option value="">-- choose an option --</option>
            <option value="option 1">Option 1</option>
            <option value="option 2">Option 2</option>
          </select>
        </div>

        <div className="form-data mt-6 bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Form Data</h3>
          <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
          <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
          <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
          <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
        </div>
      </form>
    </div>
  );
}

export default Forms;
