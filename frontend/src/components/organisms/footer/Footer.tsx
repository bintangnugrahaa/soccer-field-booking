"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<any>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="site-footer">
        <div className="inner first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading poppins-bold">Star Mini Soccer</h3>
                  <p className="poppins-regular">
                    Star Mini Soccer menyediakan lapangan berkualitas, fasilitas
                    lengkap, dan layanan terbaik untuk pengalaman bermain sepak
                    bola yang menyenangkan.
                  </p>
                </div>
                <div className="widget">
                  <ul
                    className="list-unstyled social"
                    style={{ marginRight: "10px" }}
                  >
                    <li>
                      <a href="https://www.instagram.com/bintangnugraaha">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/bintangnugraha">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/bintangnugrahaa">
                        <span className="icon-github"></span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:muhammadbintangnugraha18@gmail.com">
                        <span className="icon-mail_outline"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 pl-lg-5">
                <div className="widget">
                  <h3 className="heading">Pages</h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="widget">
                  <h3 className="heading">Resources</h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">Contact</h3>
                  <ul className="list-unstyled quick-info links">
                    <li className="email">
                      <a href="mailto:muhammadbintangnugraha18@gmail.com">
                        muhammadbintangnugraha18@gmail.com
                      </a>
                    </li>
                    <li className="phone">
                      <a href="https://api.whatsapp.com/send/?phone=6285155344998">
                        +62 851-5534-4998
                      </a>
                    </li>
                    <li className="address">
                      <a href="https://maps.app.goo.gl/dG8ZhmxNpCNgyF9M6">
                        Jl. Tulip, Rw. Panjang, Kecamatan Bojonggede, Kabupaten
                        Bogor, Jawa Barat 16920
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner dark">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 mb-3 mb-md-0 mx-auto">
                <p>
                  Copyright &copy; {year || "Loading..."}. All Rights Reserved.
                  &mdash; Designed with love by
                  <a
                    href="https://github.com/bintangnugrahaa"
                    className="link-highlight"
                  >
                    Muhammad Bintang Nugraha
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
