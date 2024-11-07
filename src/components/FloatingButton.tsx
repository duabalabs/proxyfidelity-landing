import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const FloatingButton = () => (
  <Button
    href="https://my.proxyfidelity.com"
    type="primary"
    target="_blank"
    shape="round"
    size="large"
    icon={<ArrowRightOutlined />}
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 1000,
    }}
  >
    My Projects
  </Button>
);

export default FloatingButton;
