import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Templates/HomePage.vue";
import TestPage from "../components/Templates/TestPage.vue";
import TestOne from "../components/Organisms/Test/TestOne.vue";
import TestTwo from "../components/Organisms/Test/TestTwo.vue";
import TestThree from "../components/Organisms/Test/TestThree.vue";
import TestFour from "../components/Organisms/Test/TestFour.vue";
import TestFive from "../components/Organisms/Test/TestFive.vue";
import TestSix from "../components/Organisms/Test/TestSix.vue";
import TestSeven from "../components/Organisms/Test/TestSeven.vue";
import TestEight from "../components/Organisms/Test/TestEight.vue";
import TestNine from "../components/Organisms/Test/TestNine.vue";
import TestTen from "../components/Organisms/Test/TestTen.vue";
import TestEleven from "../components/Organisms/Test/TestEleven.vue";
import FInalAnswer from "../components/Organisms/Test/FInalAnswer.vue";
import ResultPage from "../components/Templates/ResultPage.vue";
import GetApiPage from "../components/Templates/GetApiPage.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/test",
    component: TestPage,
    children: [
      {
        path: "1",
        component: TestOne,
        id: 1,
      },
      {
        path: "2",
        component: TestTwo,
        id: 2,
      },
      {
        path: "3",
        component: TestThree,
        id: 3,
      },
      {
        path: "4",
        component: TestFour,
        id: 4,
      },
      {
        path: "5",
        component: TestFive,
        id: 5,
      },
      {
        path: "6",
        component: TestSix,
        id: 6,
      },
      {
        path: "7",
        component: TestSeven,
        id: 7,
      },
      {
        path: "8",
        component: TestEight,
        id: 8,
      },
      {
        path: "9",
        component: TestNine,
        id: 9,
      },
      {
        path: "10",
        component: TestTen,
        id: 10,
      },
      {
        path: "11",
        component: TestEleven,
        id: 11,
      },
      {
        path: "final",
        component: FInalAnswer,
        id: 12,
      },
    ]
  },
  {
    path:'/results',
    component:ResultPage
  },
  {
    path:'/api',
    component:GetApiPage
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
