import globals from "globals";
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 기본 JavaScript 및 TypeScript 설정
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    rules: {},
  },

  // JavaScript 권장 설정
  js.configs.recommended,

  // TypeScript 권장 설정
  {
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: tsPlugin.configs.recommended.rules,
  },

  // React 권장 설정
  {
    plugins: {
      react,
    },
    rules: react.configs.recommended.rules,
  },

  // React Native 규칙을 수동으로 추가
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "react-native": reactNative,
    },
    rules: {
      "react-native/no-unused-styles": "error",
      "react-native/no-inline-styles": "error",  // inline styles 금지
      "react-native/no-color-literals": "warn",  // 컬러 리터럴 사용을 줄이는 규칙
      "react-native/split-platform-components": "warn",  // 플랫폼 별 컴포넌트 분리
      // 다른 react-native 규칙도 여기에 추가
    },
  },
];
