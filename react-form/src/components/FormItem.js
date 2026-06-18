import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const FormItem =  ({ item, onChange, answer })  => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  useEffect(() => {
    setCurrentValue(answer || null);
  }, [answer]);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }

  switch (item.type) {
    case 'text':
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value)}
            value={currentValue}
          />
        </>
      );
    case 'password':
      return (
        <>
          <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => handleChange(e.target.value)}
            value={currentValue || ""}
          />
        </>
      );
    case 'information':
      return (
        <p>
          {item.label}
        </p>
      );
    case 'select':
      return (
        <div className="mt-2">
          <Form.Select
            aria-label={item.label}
            onChange={(e) => handleChange(e.target.value)}
            value={currentValue || ""}
          >
            <option>{item.label}</option>
            {item.options.map((opt) => (
              <option key={`${item.value}-${opt}`} value={opt}>{opt}</option>
            ))}
          </Form.Select>
        </div>
      );
    default:
      return <></>;
  }
};
