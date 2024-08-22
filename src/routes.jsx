import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";
import Main from "./pages/main/Main";
import SelectMode from "./pages/selectMode/SelectMode";
import SelectLevel from "./pages/practiceMode/selectLevel/SelectLevel";
import SelectSite from "./pages/challengeMode/selectSite/SelectSite";
import Intro from "./pages/practiceMode/step0/Intro";
import SelectPerformance from "./pages/practiceMode/step1/SelectPerformance";
import SelectRound from "./pages/practiceMode/step1/SelectRound";
import SelectRoundInterpark from "./pages/challengeMode/interpark/SelectRoundInterpark";
import SelectPayMethod from "./pages/practiceMode/step4/SelectPayMethod";
import CardPay from "./pages/practiceMode/step4/CardPay";
import Step5 from "./pages/practiceMode/step5/Step5";
import SelectSeat from "./pages/practiceMode/step2/SelectSeat";
import SeatPriceCheck from "./pages/practiceMode/step3/SeatPriceCheck";
import PrivateRoute from "./pages/PrivateRoute";
import ChallangeIntro from "./pages/challengeMode/step0/ChallangeIntro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main />, label: "메인화면-로그인" },
      { path: "select-mode", element: <SelectMode />, label: "모드 선택" },
      { path: "select-level", element: <SelectLevel />, label: "난이도 선택" },
      { path: "select-site", element: <SelectSite />, label: "사이트 선택" },
      {
        path: "progress",
        element: <ProgressContents />,
        children: [
          {
            path: "step0",
            element: <Intro />,
            label: "인트로 화면"
          },
          {
            path: "step1-1",
            element: <PrivateRoute element={<SelectPerformance />} />,
            label: "공연 선택"
          },
          {
            path: "step1-2",
            element: <PrivateRoute element={<SelectRound />} />,
            label: "날짜 및 회차 선택"
          },
          {
            path: "step2",
            element: <PrivateRoute element={<SelectSeat />} />,
            label: "좌석 선택"
          },
          {
            path: "step3-1",
            element: <PrivateRoute element={<SeatPriceCheck />} />,
            label: "좌석 매수 및 가격 확인"
          },
          {
            path: "step4-1",
            element: <PrivateRoute element={<SelectPayMethod />} />,
            label: "결제방식 / 수단 선택"
          },
          {
            path: "step4-2",
            element: <PrivateRoute element={<CardPay />} />,
            label: "카드 결제창"
          },
          {
            path: "step5",
            element: <PrivateRoute element={<Step5 />} />,
            label: "예매 성공"
          }
        ]
      },
      {
        path: "interpark",
        element: <ProgressContents />,
        children: [
          {
            path: "step0",
            element: <PrivateRoute element={<ChallangeIntro />} />,
            label: "인트로"
          },
          {
            path: "step1",
            element: <PrivateRoute element={<SelectRoundInterpark />} />,
            label: "날짜 및 회차 선택"
          },
          {
            path: "step5",
            element: <PrivateRoute element={<Step5 />} />,
            label: "예매 성공"
          }
        ]
      },
      {
        path: "yes24",
        element: <ProgressContents />,
        children: [
          {
            path: "step0",
            element: <ChallangeIntro />,
            lable: "인트로"
          }
        ]
      }
    ]
  }
]);

export default router;
