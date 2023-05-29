import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // duration: "60s",
  stages: [
    { duration: "5s", target: 2000 },
    { duration: "50s", target: 2000 },
    { duration: "5s", target: 0 },
  ],
};

export default function () {
  // http.get("http://localhost:8080/Products");
  http.get("http://localhost:8080/productbyid?id=942181");
  // http.get("http://localhost:8080/styles?id=942182");
  // http.get("http://localhost:8080/related?id=942182");
  // http.get("http://localhost:8080/features?id=942181");

  sleep(1);
}
