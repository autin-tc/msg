import React from "react";
import {ConfigProvider} from "antd";
import {MainLayout} from "src/layouts/MainLayout/MainLayout";

export const App:React.FC = () => {
  return (
    <ConfigProvider>
      <MainLayout />
    </ConfigProvider>
  )
}