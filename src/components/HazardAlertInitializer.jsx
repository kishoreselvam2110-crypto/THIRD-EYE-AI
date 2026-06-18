'use client';
import { useHazardAlert } from "../hooks/useHazardAlert";

export default function HazardAlertInitializer() {
  useHazardAlert({ threshold: 1 });
  return null;
}
