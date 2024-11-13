import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SVGImageService {

  constructor(private sanitizer: DomSanitizer) { }

  // Content SVG ----
  content_svgImage = {
    ourTeamSVG: this.sanitizer.bypassSecurityTrustHtml
    (`
          <svg class="shape-1 move-1" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" width="81" height="63"
            fill="var(--primary)" xmlns:v="https://vecta.io/nano">
            <circle cx="16.695" cy="3.497" r="3.497" />
            <circle cx="12.296" cy="21.975" r="3.497" />
            <circle cx="7.896" cy="40.453" r="3.497" />
            <circle cx="3.497" cy="58.931" r="3.497" />
            <circle cx="36.933" cy="3.497" r="3.497" />
            <circle cx="32.534" cy="21.975" r="3.497" />
            <circle cx="28.134" cy="40.453" r="3.497" />
            <circle cx="23.735" cy="58.931" r="3.497" />
            <circle cx="57.171" cy="3.497" r="3.497" />
            <circle cx="52.772" cy="21.975" r="3.497" />
            <circle cx="48.372" cy="40.453" r="3.497" />
            <circle cx="43.973" cy="58.931" r="3.497" />
            <circle cx="77.409" cy="3.497" r="3.497" />
            <circle cx="73.01" cy="21.975" r="3.497" />
            <circle cx="68.61" cy="40.453" r="3.497" />
            <circle cx="64.211" cy="58.931" r="3.497" />
          </svg>
          <svg class="shape-4 move-2" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" width="57" height="43"
            fill="var(--secondary)" xmlns:v="https://vecta.io/nano">
            <circle cx="11.261" cy="2.559" r="2.559"></circle>
            <ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse>
            <circle cx="5.375" cy="27.897" r="2.303"></circle>
            <circle cx="2.559" cy="40.438" r="2.559"></circle>
            <ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse>
            <ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse>
            <ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse>
            <ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse>
            <ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse>
            <circle cx="36.599" cy="15.1" r="2.303"></circle>
            <ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse>
            <circle cx="30.713" cy="40.438" r="2.559"></circle>
            <circle cx="54.259" cy="2.559" r="2.559"></circle>
            <circle cx="50.42" cy="15.1" r="2.303"></circle>
            <circle cx="47.349" cy="27.897" r="2.303"></circle>
            <circle cx="44.533" cy="40.438" r="2.559"></circle>
          </svg>
          <svg class="shape-6 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
            <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2"
            stroke="var(--primary)" stroke-width="5" />
            <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29"
            stroke="var(--primary)" stroke-width="5" />
          </svg>
          <svg class="shape-2 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg"
            xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
            <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
            <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5" /> </mask>
            <g mask="url(#A)">
            <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718"
            stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" />
            </g>
          </svg>
          <svg class="shape-5 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
            <g opacity="0.2">
            <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
            <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
            <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
            <rect width="15.3997" height="89.934"transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
            </g>
          </svg>
          <svg class="shape-3 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
            <g opacity="0.2">
            <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
            <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
            <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
            <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
            </g>
          </svg>
    `),
    recentProjectsSVG: this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-1 move-1" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" width="81" height="63"
        fill="var(--primary)" xmlns:v="https://vecta.io/nano">
        <circle cx="16.695" cy="3.497" r="3.497"></circle>
        <circle cx="12.296" cy="21.975" r="3.497"></circle>
        <circle cx="7.896" cy="40.453" r="3.497"></circle>
        <circle cx="3.497" cy="58.931" r="3.497"></circle>
        <circle cx="36.933" cy="3.497" r="3.497"></circle>
        <circle cx="32.534" cy="21.975" r="3.497"></circle>
        <circle cx="28.134" cy="40.453" r="3.497"></circle>
        <circle cx="23.735" cy="58.931" r="3.497"></circle>
        <circle cx="57.171" cy="3.497" r="3.497"></circle>
        <circle cx="52.772" cy="21.975" r="3.497"></circle>
        <circle cx="48.372" cy="40.453" r="3.497"></circle>
        <circle cx="43.973" cy="58.931" r="3.497"></circle>
        <circle cx="77.409" cy="3.497" r="3.497"></circle>
        <circle cx="73.01" cy="21.975" r="3.497"></circle>
        <circle cx="68.61" cy="40.453" r="3.497"></circle>
        <circle cx="64.211" cy="58.931" r="3.497"></circle>
      </svg>
      <svg class="shape-2 move-2" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" width="81" height="63"
        fill="var(--secondary)" xmlns:v="https://vecta.io/nano">
        <circle cx="11.261" cy="2.559" r="2.559"></circle>
        <ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse>
        <circle cx="5.375" cy="27.897" r="2.303"></circle>
        <circle cx="2.559" cy="40.438" r="2.559"></circle>
        <ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse>
        <ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse>
        <ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse>
        <ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse>
        <ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse>
        <circle cx="36.599" cy="15.1" r="2.303"></circle>
        <ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse>
        <circle cx="30.713" cy="40.438" r="2.559"></circle>
        <circle cx="54.259" cy="2.559" r="2.559"></circle>
        <circle cx="50.42" cy="15.1" r="2.303"></circle>
        <circle cx="47.349" cy="27.897" r="2.303"></circle>
        <circle cx="44.533" cy="40.438" r="2.559"></circle>
      </svg>
      <svg class="shape-3 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48"
        fill="none"> <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2"
        stroke="var(--primary)" stroke-width="5"></path>
        <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29"
        stroke="var(--primary)" stroke-width="5"></path>
      </svg>
      <svg class="shape-4 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg"
        xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
        <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"></circle>
        </mask>
        <g mask="url(#A)"> <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718"
        stroke="var(--secondary)" stroke-width="2" stroke-linecap="round"></path>
        </g>
      </svg>
      <svg class="shape-5 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2"><rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
      <svg class="shape-6 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934"transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
    `),
    blogSliderFullSVG: this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-6 move-2" xmlns="http://www.w3.org/2000/svg" width="57" height="43" fill="var(--secondary)"
        xmlns:v="https://vecta.io/nano">
        <circle cx="11.261" cy="2.559" r="2.559"></circle>
        <ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse>
        <circle cx="5.375" cy="27.897" r="2.303"></circle>
        <circle cx="2.559" cy="40.438" r="2.559"></circle>
        <ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse>
        <ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse>
        <ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse>
        <ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse>
        <ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse>
        <circle cx="36.599" cy="15.1" r="2.303"></circle>
        <ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse>
        <circle cx="30.713" cy="40.438" r="2.559"></circle>
        <circle cx="54.259" cy="2.559" r="2.559"></circle>
        <circle cx="50.42" cy="15.1" r="2.303"></circle>
        <circle cx="47.349" cy="27.897" r="2.303"></circle>
        <circle cx="44.533" cy="40.438" r="2.559"></circle>
      </svg>
      <svg class="shape-5 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
        <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2" stroke="var(--primary)" stroke-width="5"></path>
        <pathd="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29" stroke="var(--primary)" stroke-width="5"></path>
      </svg>
      <svg class="shape-1 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
      <svg class="shape-3 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)"
        xmlns:v="https://vecta.io/nano">
        <circle cx="16.695" cy="3.497" r="3.497"></circle>
        <circle cx="12.296" cy="21.975" r="3.497"></circle>
        <circle cx="7.896" cy="40.453" r="3.497"></circle>
        <circle cx="3.497" cy="58.931" r="3.497"></circle>
        <circle cx="36.933" cy="3.497" r="3.497"></circle>
        <circle cx="32.534" cy="21.975" r="3.497"></circle>
        <circle cx="28.134" cy="40.453" r="3.497"></circle>
        <circle cx="23.735" cy="58.931" r="3.497"></circle>
        <circle cx="57.171" cy="3.497" r="3.497"></circle>
        <circle cx="52.772" cy="21.975" r="3.497"></circle>
        <circle cx="48.372" cy="40.453" r="3.497"></circle>
        <circle cx="43.973" cy="58.931" r="3.497"></circle>
        <circle cx="77.409" cy="3.497" r="3.497"></circle>
        <circle cx="73.01" cy="21.975" r="3.497"></circle>
        <circle cx="68.61" cy="40.453" r="3.497"></circle>
        <circle cx="64.211" cy="58.931" r="3.497"></circle>
      </svg>
      <svg class="shape-4 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
      <svg class="shape-2 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
    `),
    map1_SVG: this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape1" width="95" height="393" viewBox="0 0 95 393" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 153.397C60.3799 138.853 145.825 84.4055 181 59V329.604C43.468 355.895 3.02832 223.087 0 153.397Z" fill="var(--primary)"/>
        <path d="M212 2C141.176 133.668 -72.4699 -8.46584 32.4863 169.386C94.8953 275.141 67.5475 371.09 202.884 390" stroke="var(--secondary)" stroke-width="6"/>
      </svg>
      <svg class="shape3" width="117" height="393" viewBox="0 0 117 393" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96 172.397C35.6201 157.853 -49.825 103.406 -85 78V348.604C52.532 374.895 92.9717 242.087 96 172.397Z" fill="var(--secondary)"/>
        <path d="M-94 2C-23.1762 133.668 190.47 -8.46584 85.5137 169.386C23.1047 275.141 50.4525 371.09 -84.8841 390" stroke="var(--primary)" stroke-width="6"/>
      </svg>
      <svg class="shape5" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95"     fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha"><circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5" /></mask>
        <g mask="url(#A)">
          <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
      <svg class="shape6 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"/>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"/>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"/>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"/>
        </g>
      </svg>
      <svg class="shape7 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
          <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5" />
        </mask>
        <g mask="url(#A)">
          <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `),
    call_to_2_SVG:  this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg width="81" height="66" viewBox="0 0 81 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.8415 39.1484C31.7105 39.1484 30.7937 38.2316 30.7937 37.1006V12.1683C30.7937 11.2084 30.0129 10.4277 29.053 10.4277C28.0932 10.4277 27.3124 11.2084 27.3124 12.1683V37.1009C27.3124 38.2319 26.3955 39.1487 25.2646 39.1487C24.1337 39.1487 23.2168 38.2319 23.2168 37.1009V12.1683C23.2168 8.95016 25.8349 6.33203 29.053 6.33203C32.2712 6.33203 34.8893 8.95016 34.8893 12.1683V37.1009C34.8893 38.2317 33.9724 39.1484 32.8415 39.1484Z" fill="#141818"/>
        <path d="M17.6877 39.1483C16.5567 39.1483 15.6399 38.2314 15.6399 37.1005V10.2738C15.6399 9.31391 14.8591 8.53313 13.8992 8.53313C12.9394 8.53313 12.1586 9.31391 12.1586 10.2738V15.5152C12.1586 16.6461 11.2417 17.563 10.1108 17.563C8.97986 17.563 8.06299 16.6461 8.06299 15.5152V10.2738C8.06299 7.05563 10.6811 4.4375 13.8992 4.4375C17.1174 4.4375 19.7355 7.05563 19.7355 10.2738V37.1008C19.7355 38.2316 18.8186 39.1483 17.6877 39.1483Z" fill="#141818"/>
        <path d="M25.2646 39.1484C24.1336 39.1484 23.2168 38.2315 23.2168 37.1006V6.48493C23.2168 5.52509 22.436 4.74431 21.4761 4.74431C20.5163 4.74431 19.7355 5.52509 19.7355 6.48493V37.1007C19.7355 38.2317 18.8186 39.1485 17.6877 39.1485C16.5568 39.1485 15.6399 38.2317 15.6399 37.1007V6.48493C15.6399 3.26681 18.258 0.648682 21.4761 0.648682C24.6943 0.648682 27.3124 3.26681 27.3124 6.48493V37.1007C27.3124 38.2317 26.3955 39.1484 25.2646 39.1484Z" fill="#141818"/>
        <path d="M11.4736 59.8366C10.7258 59.8366 10.0051 59.4253 9.64452 58.7124C8.8953 57.2307 7.79718 55.9208 6.46874 54.9246C2.72265 52.1146 0.486084 47.6411 0.486084 42.9583V26.5286C0.486084 23.3105 3.10421 20.6924 6.32233 20.6924C9.54046 20.6924 12.1586 23.3105 12.1586 26.5286V35.3958C12.1586 36.5268 11.2417 37.4436 10.1108 37.4436C8.97983 37.4436 8.06296 36.5268 8.06296 35.3958V26.5286C8.06296 25.5688 7.28218 24.788 6.32233 24.788C5.36249 24.788 4.58171 25.5688 4.58171 26.5286V42.9583C4.58171 46.3591 6.20577 49.6077 8.9264 51.6483C10.7555 53.0203 12.2678 54.8241 13.2995 56.8644C13.8098 57.8736 13.4055 59.1055 12.3961 59.6158C12.0998 59.7657 11.7844 59.8366 11.4736 59.8366Z" fill="#141818"/>
        <path d="M40.4184 39.1484C39.2874 39.1484 38.3706 38.2315 38.3706 37.1006V17.8514C38.3706 16.8915 37.5898 16.1108 36.63 16.1108C35.6701 16.1108 34.8893 16.8915 34.8893 17.8514V37.1008C34.8893 38.2317 33.9725 39.1486 32.8415 39.1486C31.7106 39.1486 30.7937 38.2317 30.7937 37.1008V17.8514C30.7937 14.6333 33.4118 12.0151 36.63 12.0151C39.8481 12.0151 42.4662 14.6333 42.4662 17.8514V37.1008C42.466 38.2317 41.5493 39.1484 40.4184 39.1484Z" fill="#141818"/>
        <path d="M55.7077 39.1484C54.5768 39.1484 53.6599 38.2316 53.6599 37.1006V12.1683C53.6599 11.2084 52.8791 10.4277 51.9193 10.4277C50.9594 10.4277 50.1786 11.2084 50.1786 12.1683V37.1009C50.1786 38.2319 49.2618 39.1487 48.1308 39.1487C46.9999 39.1487 46.083 38.2319 46.083 37.1009V12.1683C46.083 8.95016 48.7011 6.33203 51.9193 6.33203C55.1374 6.33203 57.7555 8.95016 57.7555 12.1683V37.1009C57.7555 38.2317 56.8388 39.1484 55.7077 39.1484Z" fill="#141818"/>
        <path d="M63.2846 39.1483C62.1537 39.1483 61.2368 38.2314 61.2368 37.1005V10.2738C61.2368 7.05563 63.8549 4.4375 67.0731 4.4375C70.2912 4.4375 72.9093 7.05563 72.9093 10.2738V15.5152C72.9093 16.6461 71.9924 17.563 70.8615 17.563C69.7306 17.563 68.8137 16.6461 68.8137 15.5152V10.2738C68.8137 9.31391 68.0329 8.53313 67.0731 8.53313C66.1132 8.53313 65.3324 9.31391 65.3324 10.2738V37.1008C65.3324 38.2316 64.4157 39.1483 63.2846 39.1483Z" fill="#141818"/>
        <path d="M63.2846 39.1484C62.1537 39.1484 61.2368 38.2315 61.2368 37.1006V6.48493C61.2368 5.52509 60.456 4.74431 59.4962 4.74431C58.5363 4.74431 57.7555 5.52509 57.7555 6.48493V37.1007C57.7555 38.2317 56.8387 39.1485 55.7077 39.1485C54.5768 39.1485 53.6599 38.2317 53.6599 37.1007V6.48493C53.6599 3.26681 56.278 0.648682 59.4962 0.648682C62.7143 0.648682 65.3324 3.26681 65.3324 6.48493V37.1007C65.3324 38.2317 64.4157 39.1484 63.2846 39.1484Z" fill="#141818"/>
        <path d="M69.4985 59.8368C69.1875 59.8368 68.8722 59.766 68.5761 59.616C67.5667 59.1057 67.1624 57.8736 67.6727 56.8646C68.7044 54.8241 70.2166 53.0205 72.0458 51.6482C74.7663 49.6077 76.3905 46.3591 76.3905 42.9583V26.5286C76.3905 25.5688 75.6097 24.788 74.6499 24.788C73.69 24.788 72.9092 25.5688 72.9092 26.5286V35.3958C72.9092 36.5268 71.9925 37.4436 70.8614 37.4436C69.7305 37.4436 68.8136 36.5268 68.8136 35.3958V26.5286C68.8136 23.3105 71.4317 20.6924 74.6499 20.6924C77.868 20.6924 80.4861 23.3105 80.4861 26.5286V42.9583C80.4861 47.6413 78.2496 52.1147 74.5035 54.9246C73.175 55.921 72.0771 57.2308 71.3277 58.7125C70.9669 59.4257 70.2463 59.8368 69.4985 59.8368Z" fill="#141818"/>
        <path d="M48.1308 39.1484C46.9999 39.1484 46.083 38.2315 46.083 37.1006V17.8514C46.083 16.8915 45.3022 16.1108 44.3424 16.1108C43.3825 16.1108 42.6017 16.8915 42.6017 17.8514V37.1008C42.6017 38.2317 41.6849 39.1486 40.5539 39.1486C39.423 39.1486 38.5061 38.2317 38.5061 37.1008V17.8514C38.5061 14.6333 41.1242 12.0151 44.3424 12.0151C47.5605 12.0151 50.1786 14.6333 50.1786 17.8514V37.1008C50.1786 38.2317 49.2619 39.1484 48.1308 39.1484Z" fill="#141818"/>
        <path d="M50.5145 23.2265C44.5276 23.2265 41.8414 26.5823 40.7846 28.5532C40.652 28.8008 40.2915 28.8004 40.1592 28.5527C39.106 26.5815 36.4346 23.2263 30.4481 23.2263C23.6285 23.2263 17.6296 27.8816 17.6296 36.3826C17.6296 39.8224 18.3306 42.7694 20.2764 46.0582C24.2414 52.7604 37.3032 61.4488 39.9862 63.161C40.2829 63.3502 40.6585 63.3509 40.9556 63.1623C43.6409 61.4584 56.705 52.8129 60.701 46.0582C62.6467 42.7694 63.3429 39.8224 63.3429 36.3826C63.3426 27.8818 57.334 23.2265 50.5145 23.2265Z" fill="#F7CF47"/>
        <path d="M40.4717 65.3515C39.9087 65.3515 39.36 65.1912 38.8845 64.8876C37.2651 63.8543 22.9356 54.5757 18.5136 47.1012C16.4859 43.6736 15.5815 40.3681 15.5815 36.3828C15.5815 31.8025 17.1348 27.9112 20.0736 25.1295C22.7651 22.5818 26.4497 21.1787 30.448 21.1787C35.6008 21.1787 38.6947 23.3289 40.485 25.4206C42.227 23.4253 45.3383 21.1787 50.5145 21.1787C54.5133 21.1787 58.1989 22.5817 60.893 25.1289C63.8355 27.9111 65.3906 31.8026 65.3906 36.3828C65.3906 40.3736 64.4878 43.679 62.4634 47.1012C58.009 54.6312 43.6726 63.8637 42.0526 64.8917C41.5787 65.1923 41.0319 65.3515 40.4717 65.3515ZM30.4481 25.2743C25.087 25.2743 19.6773 28.7092 19.6773 36.3828C19.6773 39.6361 20.3836 42.2179 22.0386 45.0157C25.6278 51.0828 37.5862 59.1456 40.4753 61.0381C46.158 57.3676 55.8311 50.2679 58.9383 45.0157C60.59 42.2237 61.2948 39.6418 61.2948 36.3828C61.2948 28.7092 55.8805 25.2743 50.5142 25.2743C45.8461 25.2743 43.6278 27.5837 42.589 29.5211C42.1706 30.3017 41.3594 30.7865 40.472 30.7865C39.5828 30.7865 38.7709 30.3001 38.3528 29.5175C37.3186 27.582 35.1075 25.2743 30.4481 25.2743Z" fill="#141818"/>
      </svg>
    `),
    banner_1_SVG:  this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-1 move-2" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" width="81" height="63"
        fill="var(--primary)" xmlns:v="https://vecta.io/nano">
        <circle cx="16.695" cy="3.497" r="3.497" />
        <circle cx="12.296" cy="21.975" r="3.497" />
        <circle cx="7.896" cy="40.453" r="3.497" />
        <circle cx="3.497" cy="58.931" r="3.497" />
        <circle cx="36.933" cy="3.497" r="3.497" />
        <circle cx="32.534" cy="21.975" r="3.497" />
        <circle cx="28.134" cy="40.453" r="3.497" />
        <circle cx="23.735" cy="58.931" r="3.497" />
        <circle cx="57.171" cy="3.497" r="3.497" />
        <circle cx="52.772" cy="21.975" r="3.497" />
        <circle cx="48.372" cy="40.453" r="3.497" />
        <circle cx="43.973" cy="58.931" r="3.497" />
        <circle cx="77.409" cy="3.497" r="3.497" />
        <circle cx="73.01" cy="21.975" r="3.497" />
        <circle cx="68.61" cy="40.453" r="3.497" />
        <circle cx="64.211" cy="58.931" r="3.497" />
      </svg>
      <svg class="shape-2 move-2" viewBox="0 0 57 43" xmlns="http://www.w3.org/2000/svg" width="57" height="43"
        fill="var(--secondary)" xmlns:v="https://vecta.io/nano">
        <circle cx="11.261" cy="2.559" r="2.559" />
        <ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303" />
        <circle cx="5.375" cy="27.897" r="2.303" />
        <circle cx="2.559" cy="40.438" r="2.559" />
        <ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559" />
        <ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303" />
        <ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303" />
        <ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559" />
        <ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559" />
        <circle cx="36.599" cy="15.1" r="2.303" />
        <ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303" />
        <circle cx="30.713" cy="40.438" r="2.559" />
        <circle cx="54.259" cy="2.559" r="2.559" />
        <circle cx="50.42" cy="15.1" r="2.303" />
        <circle cx="47.349" cy="27.897" r="2.303" />
        <circle cx="44.533" cy="40.438" r="2.559" />
      </svg>
      <svg class="shape-3 move-2" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" width="81" height="63"
        fill="var(--primary)" xmlns:v="https://vecta.io/nano">
        <circle cx="16.695" cy="3.497" r="3.497" />
        <circle cx="12.296" cy="21.975" r="3.497" />
        <circle cx="7.896" cy="40.453" r="3.497" />
        <circle cx="3.497" cy="58.931" r="3.497" />
        <circle cx="36.933" cy="3.497" r="3.497" />
        <circle cx="32.534" cy="21.975" r="3.497" />
        <circle cx="28.134" cy="40.453" r="3.497" />
        <circle cx="23.735" cy="58.931" r="3.497" />
        <circle cx="57.171" cy="3.497" r="3.497" />
        <circle cx="52.772" cy="21.975" r="3.497" />
        <circle cx="48.372" cy="40.453" r="3.497" />
        <circle cx="43.973" cy="58.931" r="3.497" />
        <circle cx="77.409" cy="3.497" r="3.497" />
        <circle cx="73.01" cy="21.975" r="3.497" />
        <circle cx="68.61" cy="40.453" r="3.497" />
        <circle cx="64.211" cy="58.931" r="3.497" />
      </svg>
      <svg class="shape-4 move-2" viewBox="0 0 57 43" xmlns="http://www.w3.org/2000/svg" width="57" height="43"
        fill="var(--secondary)" xmlns:v="https://vecta.io/nano">
        <circle cx="11.261" cy="2.559" r="2.559" />
        <ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303" />
        <circle cx="5.375" cy="27.897" r="2.303" />
        <circle cx="2.559" cy="40.438" r="2.559" />
        <ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559" />
        <ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303" />
        <ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303" />
        <ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559" />
        <ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559" />
        <circle cx="36.599" cy="15.1" r="2.303" />
        <ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303" />
        <circle cx="30.713" cy="40.438" r="2.559" />
        <circle cx="54.259" cy="2.559" r="2.559" />
        <circle cx="50.42" cy="15.1" r="2.303" />
        <circle cx="47.349" cy="27.897" r="2.303" />
        <circle cx="44.533" cy="40.438" r="2.559" />
      </svg>
    `),
    footer_2_SVG:  this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape1" width="194" height="418" viewBox="0 0 194 418" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M172 183.598C107.617 168.098 16.5071 110.075 -21 83V371.381C125.65 399.399 168.771 257.867 172 183.598Z" fill="var(--primary)"/>
        <path d="M-30 2C45.2503 142.152 272.249 -9.14019 160.733 180.171C94.4237 292.74 123.481 394.872 -20.3143 415" stroke="var(--secondary)" stroke-width="6"/>
      </svg>
      <svg class="shape4" viewBox="0 0 482 279" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3C53.9035 88.8689 116.283 185.582 247.28 195.034C333.831 201.279 435.198 155.222 489 277" stroke="var(--secondary)" stroke-width="8"/>
        <path d="M343.949 87.7759C238.291 82.6 232.707 40.9079 204 3H483V202C463.517 120.839 430.681 92.0248 343.949 87.7759Z" fill="var(--primary)"/>
      </svg>
    `),
    counter_4_SVG:  this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-1 move-1" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)" xmlns:v="https://vecta.io/nano"><circle cx="16.695" cy="3.497" r="3.497"></circle><circle cx="12.296" cy="21.975" r="3.497"></circle><circle cx="7.896" cy="40.453" r="3.497"></circle><circle cx="3.497" cy="58.931" r="3.497"></circle><circle cx="36.933" cy="3.497" r="3.497"></circle><circle cx="32.534" cy="21.975" r="3.497"></circle><circle cx="28.134" cy="40.453" r="3.497"></circle><circle cx="23.735" cy="58.931" r="3.497"></circle><circle cx="57.171" cy="3.497" r="3.497"></circle><circle cx="52.772" cy="21.975" r="3.497"></circle><circle cx="48.372" cy="40.453" r="3.497"></circle><circle cx="43.973" cy="58.931" r="3.497"></circle><circle cx="77.409" cy="3.497" r="3.497"></circle><circle cx="73.01" cy="21.975" r="3.497"></circle><circle cx="68.61" cy="40.453" r="3.497"></circle><circle cx="64.211" cy="58.931" r="3.497"></circle></svg>
      <svg class="shape-2 move-2" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--secondary)" xmlns:v="https://vecta.io/nano"><circle cx="11.261" cy="2.559" r="2.559"></circle><ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse><circle cx="5.375" cy="27.897" r="2.303"></circle><circle cx="2.559" cy="40.438" r="2.559"></circle><ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse><ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse><ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse><ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse><ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse><circle cx="36.599" cy="15.1" r="2.303"></circle><ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse><circle cx="30.713" cy="40.438" r="2.559"></circle><circle cx="54.259" cy="2.559" r="2.559"></circle><circle cx="50.42" cy="15.1" r="2.303"></circle><circle cx="47.349" cy="27.897" r="2.303"></circle><circle cx="44.533" cy="40.438" r="2.559"></circle></svg>
      <svg class="shape-3 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
        <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2" stroke="var(--primary)" stroke-width="5"></path>
        <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29" stroke="var(--primary)" stroke-width="5"></path>
      </svg>
      <svg class="shape-4 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
          <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"></circle>
        </mask>
        <g mask="url(#A)">
          <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round"></path>
        </g>
      </svg>
      <svg class="shape-5 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
      <svg class="shape-6 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
    `),
    happyClientSVG:  this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-1 move-1" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)" xmlns:v="https://vecta.io/nano"><circle cx="16.695" cy="3.497" r="3.497"></circle><circle cx="12.296" cy="21.975" r="3.497"></circle><circle cx="7.896" cy="40.453" r="3.497"></circle><circle cx="3.497" cy="58.931" r="3.497"></circle><circle cx="36.933" cy="3.497" r="3.497"></circle><circle cx="32.534" cy="21.975" r="3.497"></circle><circle cx="28.134" cy="40.453" r="3.497"></circle><circle cx="23.735" cy="58.931" r="3.497"></circle><circle cx="57.171" cy="3.497" r="3.497"></circle><circle cx="52.772" cy="21.975" r="3.497"></circle><circle cx="48.372" cy="40.453" r="3.497"></circle><circle cx="43.973" cy="58.931" r="3.497"></circle><circle cx="77.409" cy="3.497" r="3.497"></circle><circle cx="73.01" cy="21.975" r="3.497"></circle><circle cx="68.61" cy="40.453" r="3.497"></circle><circle cx="64.211" cy="58.931" r="3.497"></circle></svg>
      <svg class="shape-2 move-2"  xmlns="http://www.w3.org/2000/svg"  fill="var(--secondary)" xmlns:v="https://vecta.io/nano"><circle cx="11.261" cy="2.559" r="2.559"></circle><ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse><circle cx="5.375" cy="27.897" r="2.303"></circle><circle cx="2.559" cy="40.438" r="2.559"></circle><ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse><ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse><ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse><ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse><ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse><circle cx="36.599" cy="15.1" r="2.303"></circle><ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse><circle cx="30.713" cy="40.438" r="2.559"></circle><circle cx="54.259" cy="2.559" r="2.559"></circle><circle cx="50.42" cy="15.1" r="2.303"></circle><circle cx="47.349" cy="27.897" r="2.303"></circle><circle cx="44.533" cy="40.438" r="2.559"></circle></svg>
      <svg class="shape-3 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
        <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2" stroke="var(--primary)" stroke-width="5"></path>
        <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29" stroke="var(--primary)" stroke-width="5"></path>
      </svg>
      <svg class="shape-4 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
          <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"></circle>
        </mask>
        <g mask="url(#A)">
          <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round"></path>
        </g>
      </svg>
      <svg class="shape-5 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
      <svg class="shape-6 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
    `),
    form_3_SVG:  this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-1 move-1" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)" xmlns:v="https://vecta.io/nano"><circle cx="16.695" cy="3.497" r="3.497"></circle><circle cx="12.296" cy="21.975" r="3.497"></circle><circle cx="7.896" cy="40.453" r="3.497"></circle><circle cx="3.497" cy="58.931" r="3.497"></circle><circle cx="36.933" cy="3.497" r="3.497"></circle><circle cx="32.534" cy="21.975" r="3.497"></circle><circle cx="28.134" cy="40.453" r="3.497"></circle><circle cx="23.735" cy="58.931" r="3.497"></circle><circle cx="57.171" cy="3.497" r="3.497"></circle><circle cx="52.772" cy="21.975" r="3.497"></circle><circle cx="48.372" cy="40.453" r="3.497"></circle><circle cx="43.973" cy="58.931" r="3.497"></circle><circle cx="77.409" cy="3.497" r="3.497"></circle><circle cx="73.01" cy="21.975" r="3.497"></circle><circle cx="68.61" cy="40.453" r="3.497"></circle><circle cx="64.211" cy="58.931" r="3.497"></circle></svg>
      <svg class="shape-2 move-2" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63"  fill="var(--secondary)" xmlns:v="https://vecta.io/nano"><circle cx="11.261" cy="2.559" r="2.559"></circle><ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse><circle cx="5.375" cy="27.897" r="2.303"></circle><circle cx="2.559" cy="40.438" r="2.559"></circle><ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse><ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse><ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse><ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse><ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse><circle cx="36.599" cy="15.1" r="2.303"></circle><ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse><circle cx="30.713" cy="40.438" r="2.559"></circle><circle cx="54.259" cy="2.559" r="2.559"></circle><circle cx="50.42" cy="15.1" r="2.303"></circle><circle cx="47.349" cy="27.897" r="2.303"></circle><circle cx="44.533" cy="40.438" r="2.559"></circle></svg>
      <svg class="shape-3 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
        <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2" stroke="var(--primary)" stroke-width="5"></path>
        <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29" stroke="var(--primary)" stroke-width="5"></path>
      </svg>
      <svg class="shape-4 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
          <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"></circle>
        </mask>
        <g mask="url(#A)">
          <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round"></path>
        </g>
      </svg>
      <svg class="shape-5 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
      <svg class="shape-6 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
    `),
    aboutus_6_SVG:this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-1 move-1" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)" xmlns:v="https://vecta.io/nano"><circle cx="16.695" cy="3.497" r="3.497"></circle><circle cx="12.296" cy="21.975" r="3.497"></circle><circle cx="7.896" cy="40.453" r="3.497"></circle><circle cx="3.497" cy="58.931" r="3.497"></circle><circle cx="36.933" cy="3.497" r="3.497"></circle><circle cx="32.534" cy="21.975" r="3.497"></circle><circle cx="28.134" cy="40.453" r="3.497"></circle><circle cx="23.735" cy="58.931" r="3.497"></circle><circle cx="57.171" cy="3.497" r="3.497"></circle><circle cx="52.772" cy="21.975" r="3.497"></circle><circle cx="48.372" cy="40.453" r="3.497"></circle><circle cx="43.973" cy="58.931" r="3.497"></circle><circle cx="77.409" cy="3.497" r="3.497"></circle><circle cx="73.01" cy="21.975" r="3.497"></circle><circle cx="68.61" cy="40.453" r="3.497"></circle><circle cx="64.211" cy="58.931" r="3.497"></circle></svg>
      <svg class="shape-2 move-2" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63"  fill="var(--secondary)" xmlns:v="https://vecta.io/nano"><circle cx="11.261" cy="2.559" r="2.559"></circle><ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse><circle cx="5.375" cy="27.897" r="2.303"></circle><circle cx="2.559" cy="40.438" r="2.559"></circle><ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse><ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse><ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse><ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse><ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse><circle cx="36.599" cy="15.1" r="2.303"></circle><ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse><circle cx="30.713" cy="40.438" r="2.559"></circle><circle cx="54.259" cy="2.559" r="2.559"></circle><circle cx="50.42" cy="15.1" r="2.303"></circle><circle cx="47.349" cy="27.897" r="2.303"></circle><circle cx="44.533" cy="40.438" r="2.559"></circle></svg>
      <svg class="shape-3 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
        <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2" stroke="var(--primary)" stroke-width="5"></path>
        <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29" stroke="var(--primary)" stroke-width="5"></path>
      </svg>
      <svg class="shape-4 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
          <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"></circle>
        </mask>
        <g mask="url(#A)">
          <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round"></path>
        </g>
      </svg>
      <svg class="shape-5 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
      <svg class="shape-6 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
    `),
    underMaintenanceSVG:this.sanitizer.bypassSecurityTrustHtml
    (`
    <svg class="shape-1" width="117" height="393" viewBox="0 0 117 393" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M96 172.397C35.6201 157.853 -49.825 103.406 -85 78V348.604C52.532 374.895 92.9717 242.087 96 172.397Z" fill="var(--secondary)"></path>
      <path d="M-94 2C-23.1762 133.668 190.47 -8.46584 85.5137 169.386C23.1047 275.141 50.4525 371.09 -84.8841 390" stroke="var(--primary)" stroke-width="6"></path>
    </svg>

    <svg class="shape-2 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
      <g opacity="0.2">
        <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
        <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
        <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
        <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
      </g>
    </svg>

    <svg class="shape-10 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
      <g opacity="0.2">
        <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
        <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
        <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
        <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
      </g>
    </svg>

    <svg class="shape-3" viewBox="0 0 482 279" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3C53.9035 88.8689 116.283 185.582 247.28 195.034C333.831 201.279 435.198 155.222 489 277" stroke="var(--primary)" stroke-width="8"></path>
      <path d="M343.949 87.7759C238.291 82.6 232.707 40.9079 204 3H483V202C463.517 120.839 430.681 92.0248 343.949 87.7759Z" fill="var(--secondary)"></path>
    </svg>

    <svg class="shape-4 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
      <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
        <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5" />
      </mask>
      <g mask="url(#A)">
        <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round" />
      </g>
    </svg>

    <svg class="shape-9"  viewBox="0 0 95 393" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 153.397C60.3799 138.853 145.825 84.4055 181 59V329.604C43.468 355.895 3.02832 223.087 0 153.397Z" fill="var(--primary)"></path>
      <path d="M212 2C141.176 133.668 -72.4699 -8.46584 32.4863 169.386C94.8953 275.141 67.5475 371.09 202.884 390" stroke="var(--secondary)" stroke-width="6"></path>
    </svg>

    <svg class="shape-5 move-2" viewBox="0 0 81 63" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)" xmlns:v="https://vecta.io/nano"><circle cx="16.695" cy="3.497" r="3.497"></circle><circle cx="12.296" cy="21.975" r="3.497"></circle><circle cx="7.896" cy="40.453" r="3.497"></circle><circle cx="3.497" cy="58.931" r="3.497"></circle><circle cx="36.933" cy="3.497" r="3.497"></circle><circle cx="32.534" cy="21.975" r="3.497"></circle><circle cx="28.134" cy="40.453" r="3.497"></circle><circle cx="23.735" cy="58.931" r="3.497"></circle><circle cx="57.171" cy="3.497" r="3.497"></circle><circle cx="52.772" cy="21.975" r="3.497"></circle><circle cx="48.372" cy="40.453" r="3.497"></circle><circle cx="43.973" cy="58.931" r="3.497"></circle><circle cx="77.409" cy="3.497" r="3.497"></circle><circle cx="73.01" cy="21.975" r="3.497"></circle><circle cx="68.61" cy="40.453" r="3.497"></circle><circle cx="64.211" cy="58.931" r="3.497"></circle></svg>

    <svg class="shape-6 move-2" xmlns="http://www.w3.org/2000/svg" width="57" height="43" fill="var(--secondary)" xmlns:v="https://vecta.io/nano"><circle cx="11.261" cy="2.559" r="2.559"></circle><ellipse cx="8.19" cy="15.1" rx="2.559" ry="2.303"></ellipse><circle cx="5.375" cy="27.897" r="2.303"></circle><circle cx="2.559" cy="40.438" r="2.559"></circle><ellipse cx="25.85" cy="2.559" rx="2.303" ry="2.559"></ellipse><ellipse cx="23.035" cy="15.1" rx="2.559" ry="2.303"></ellipse><ellipse cx="19.963" cy="27.897" rx="2.559" ry="2.303"></ellipse><ellipse cx="16.124" cy="40.438" rx="2.303" ry="2.559"></ellipse><ellipse cx="39.67" cy="2.559" rx="2.303" ry="2.559"></ellipse><circle cx="36.599" cy="15.1" r="2.303"></circle><ellipse cx="33.784" cy="27.897" rx="2.559" ry="2.303"></ellipse><circle cx="30.713" cy="40.438" r="2.559"></circle><circle cx="54.259" cy="2.559" r="2.559"></circle><circle cx="50.42" cy="15.1" r="2.303"></circle><circle cx="47.349" cy="27.897" r="2.303"></circle><circle cx="44.533" cy="40.438" r="2.559"></circle></svg>

    <svg class="shape-7 move-5" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
      <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2" stroke="var(--primary)" stroke-width="5"></path>
      <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29" stroke="var(--primary)" stroke-width="5"></path>
    </svg>

    <svg class="shape-8 move-2" viewBox="0 0 81 63"  xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)" xmlns:v="https://vecta.io/nano"><circle cx="16.695" cy="3.497" r="3.497"></circle><circle cx="12.296" cy="21.975" r="3.497"></circle><circle cx="7.896" cy="40.453" r="3.497"></circle><circle cx="3.497" cy="58.931" r="3.497"></circle><circle cx="36.933" cy="3.497" r="3.497"></circle><circle cx="32.534" cy="21.975" r="3.497"></circle><circle cx="28.134" cy="40.453" r="3.497"></circle><circle cx="23.735" cy="58.931" r="3.497"></circle><circle cx="57.171" cy="3.497" r="3.497"></circle><circle cx="52.772" cy="21.975" r="3.497"></circle><circle cx="48.372" cy="40.453" r="3.497"></circle><circle cx="43.973" cy="58.931" r="3.497"></circle><circle cx="77.409" cy="3.497" r="3.497"></circle><circle cx="73.01" cy="21.975" r="3.497"></circle><circle cx="68.61" cy="40.453" r="3.497"></circle><circle cx="64.211" cy="58.931" r="3.497"></circle></svg>

    <svg class="shape-11" viewBox="0 0 482 279" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M489 276C439.096 190.131 376.717 93.4177 245.72 83.9658C159.169 77.7208 57.8022 123.778 3.99999 2" stroke="var(--secondary)" stroke-width="8"/>
      <path d="M149.051 191.224C254.709 196.4 260.293 238.092 289 276H10V77C29.4832 158.161 62.3188 186.975 149.051 191.224Z" fill="var(--primary)"/>
    </svg>
    `),
    contact_Us_SVG:this.sanitizer.bypassSecurityTrustHtml
    (`
      <svg class="shape-1 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="63" fill="var(--primary)" xmlns:v="https://vecta.io/nano"><circle cx="16.695" cy="3.497" r="3.497"></circle><circle cx="12.296" cy="21.975" r="3.497"></circle><circle cx="7.896" cy="40.453" r="3.497"></circle><circle cx="3.497" cy="58.931" r="3.497"></circle><circle cx="36.933" cy="3.497" r="3.497"></circle><circle cx="32.534" cy="21.975" r="3.497"></circle><circle cx="28.134" cy="40.453" r="3.497"></circle><circle cx="23.735" cy="58.931" r="3.497"></circle><circle cx="57.171" cy="3.497" r="3.497"></circle><circle cx="52.772" cy="21.975" r="3.497"></circle><circle cx="48.372" cy="40.453" r="3.497"></circle><circle cx="43.973" cy="58.931" r="3.497"></circle><circle cx="77.409" cy="3.497" r="3.497"></circle><circle cx="73.01" cy="21.975" r="3.497"></circle><circle cx="68.61" cy="40.453" r="3.497"></circle><circle cx="64.211" cy="58.931" r="3.497"></circle></svg>
      <svg class="shape-3 move-1" xmlns="http://www.w3.org/2000/svg" width="81" height="48" viewBox="0 0 81 48" fill="none">
        <path d="M2 19L15.744 6.73604C18.6614 4.1328 23.1457 4.42415 25.7017 7.383L30.3669 12.7835C33.1839 16.0444 38.2501 16.0101 41.0227 12.7114L44.878 8.12464C47.6031 4.88238 52.5608 4.78406 55.4124 7.91574L59.9639 12.9144C62.8687 16.1045 67.9399 15.9329 70.6223 12.5537L79 2" stroke="var(--primary)" stroke-width="5"></path>
        <path d="M2 46L15.744 33.736C18.6614 31.1328 23.1457 31.4241 25.7017 34.383L30.3669 39.7835C33.1839 43.0444 38.2501 43.0101 41.0227 39.7114L44.878 35.1246C47.6031 31.8824 52.5608 31.7841 55.4124 34.9157L59.9639 39.9144C62.8687 43.1045 67.9399 42.9329 70.6223 39.5537L79 29" stroke="var(--primary)" stroke-width="5"></path>
      </svg>
      <svg class="shape-4 rotating" viewBox="0 0 95 95" xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="95" height="95" fill="none">
        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
          <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"></circle>
        </mask>
        <g mask="url(#A)">
          <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="var(--secondary)" stroke-width="2" stroke-linecap="round"></path>
        </g>
      </svg>
      <svg class="shape-5 rotating" xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
        <g opacity="0.2">
          <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="var(--primary)"></rect>
          <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="var(--primary)"></rect>
          <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="var(--primary)"></rect>
        </g>
      </svg>
    `),
  }


  // Elements SVG ----
  elements_svgImage = {
    fundraiserSVG: [
      this.sanitizer.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_544_431)">
      <path d="M35.0468 53.0372C34.1331 53.0372 33.3921 52.2964 33.3921 51.3826V40.0967C33.3921 37.9721 34.2129 35.9678 35.703 34.4535L43.3936 26.6382C44.4507 25.581 45.8437 25.004 47.3255 25.004C48.8073 25.004 50.2002 25.581 51.2479 26.6288L51.2567 26.6376C52.3083 27.689 52.8853 29.0821 52.8853 30.5638C52.8853 32.0457 52.3085 33.4386 51.2607 34.4863L43.3782 42.3688C43.3659 43.2915 43.3522 45.3431 43.3406 48.951L46.7584 48.9708L53.7237 43.6218C54.6541 42.9074 55.2094 41.7807 55.2094 40.6074V8.99983C55.2094 7.76596 54.2056 6.76201 52.9717 6.76201H52.954C51.7201 6.76201 50.7162 7.76596 50.7162 8.99983V21.2033C50.7162 22.1172 49.9752 22.8579 49.0615 22.8579C48.1478 22.8579 47.4068 22.1171 47.4068 21.2033V8.99983C47.4068 5.94111 49.8953 3.45264 52.954 3.45264H52.9717C56.0304 3.45264 58.5187 5.94111 58.5187 8.99983V40.6072C58.5187 42.8019 57.4797 44.9097 55.7392 46.2463L48.324 51.9408C48.0324 52.1649 47.6747 52.2877 47.3067 52.2831L41.6716 52.2506C40.7597 52.2453 40.0241 51.5033 40.0265 50.5915C40.0321 48.4876 40.0399 46.2598 40.0503 44.5545C40.0555 43.6983 40.0611 42.9734 40.0676 42.4606C40.0812 41.3538 40.0856 40.9808 40.5724 40.494L48.9205 32.1459C49.3433 31.7233 49.5759 31.1614 49.5759 30.5635C49.5759 29.9656 49.3433 29.4039 48.9205 28.9811L48.9117 28.9723C48.4851 28.5459 47.9232 28.3131 47.3255 28.3131C46.7277 28.3131 46.1659 28.546 45.7431 28.9686L38.0619 36.7744C37.1846 37.666 36.7013 38.8458 36.7013 40.0966V51.3824C36.7015 52.2965 35.9607 53.0372 35.0468 53.0372Z" fill="#003B4A" class="secondary"></path><path d="M48.3123 49.3547H35.0747V58.3448H48.3123V49.3547Z" fill="#F7CF47" class="primary"></path>
      <path d="M48.3125 60H35.0746C34.1609 60 33.4199 59.2591 33.4199 58.3453V49.3555C33.4199 48.4415 34.1609 47.7008 35.0746 47.7008H48.3123C49.2261 47.7008 49.967 48.4417 49.967 49.3555V58.3453C49.9671 59.259 49.2263 60 48.3125 60ZM36.7293 56.6906H46.6577V51.0102H36.7293V56.6906Z" fill="#003B4A" class="secondary"></path>
      <path d="M24.9531 53.0372C24.0394 53.0372 23.2985 52.2964 23.2985 51.3826V40.0967C23.2985 38.846 22.8153 37.6661 21.9379 36.7747L14.2474 28.9592C13.834 28.546 13.2721 28.3131 12.6744 28.3131C12.0767 28.3131 11.5148 28.546 11.092 28.9686L11.0754 28.985C10.6566 29.4039 10.4238 29.9658 10.4238 30.5636C10.4238 31.1613 10.6564 31.7232 11.0792 32.146L19.4273 40.4941C19.914 40.9809 19.9185 41.3537 19.9321 42.4607C19.9385 42.9735 19.9441 43.6985 19.9494 44.5546C19.9598 46.2599 19.9675 48.4877 19.9731 50.5917C19.9756 51.5036 19.2398 52.2454 18.3281 52.2507L12.693 52.2833C12.6898 52.2833 12.6867 52.2833 12.6834 52.2833C12.319 52.2833 11.9648 52.163 11.6754 51.941L4.26053 46.2463C2.51994 44.9098 1.48096 42.802 1.48096 40.6073V8.99982C1.48096 5.94111 3.96932 3.45264 7.02803 3.45264H7.04572C10.1044 3.45264 12.5929 5.94111 12.5929 8.99982V21.2033C12.5929 22.1172 11.8519 22.8579 10.9382 22.8579C10.0245 22.8579 9.28354 22.1171 9.28354 21.2033V8.99982C9.28354 7.76596 8.27959 6.76201 7.04572 6.76201H7.02803C5.79416 6.76201 4.79033 7.76596 4.79033 8.99982V40.6072C4.79033 41.7802 5.34568 42.9071 6.27604 43.6213L13.2413 48.9705L16.6591 48.9507C16.6477 45.3426 16.6339 43.2911 16.6215 42.3685L8.73943 34.4859C7.69166 33.4381 7.11486 32.0452 7.11486 30.5634C7.11486 29.0815 7.69166 27.6887 8.73943 26.6409L8.75596 26.6247C9.79986 25.5808 11.1929 25.0038 12.6746 25.0038C14.1563 25.0038 15.5493 25.5808 16.5971 26.6286L24.2969 34.4535C25.7872 35.9679 26.6078 37.9721 26.6078 40.0967V51.3826C26.6078 52.2965 25.8671 53.0372 24.9531 53.0372Z" fill="#003B4A" class="secondary"></path>
      <path d="M24.9246 49.3547H11.687V58.3448H24.9246V49.3547Z" fill="#F7CF47" class="primary"></path>
      <path d="M24.9251 60H11.6874C10.7737 60 10.0327 59.2591 10.0327 58.3453V49.3555C10.0327 48.4415 10.7737 47.7008 11.6874 47.7008H24.9251C25.8388 47.7008 26.5798 48.4417 26.5798 49.3555V58.3453C26.5798 59.259 25.8391 60 24.9251 60ZM13.3421 56.6906H23.2705V51.0102H13.3421V56.6906Z" fill="#003B4A" class="secondary"></path>
      <path d="M29.9996 27.9479C37.2602 27.9479 43.1462 22.062 43.1462 14.8013C43.1462 7.5407 37.2602 1.65479 29.9996 1.65479C22.7389 1.65479 16.853 7.5407 16.853 14.8013C16.853 22.062 22.7389 27.9479 29.9996 27.9479Z" fill="red" class="primary"></path>
      <path d="M29.9998 29.6021C26.0462 29.6021 22.3294 28.0627 19.5337 25.267C13.7628 19.4963 13.7628 10.1061 19.5337 4.33523C22.3294 1.53949 26.0463 0 29.9998 0C33.9532 0 37.6701 1.53949 40.4658 4.33512C46.2367 10.106 46.2367 19.4961 40.4658 25.2671C37.6704 28.0625 33.9533 29.6021 29.9998 29.6021ZM29.9998 3.30938C26.9301 3.30938 24.0445 4.50469 21.874 6.67523C17.3934 11.156 17.3934 18.4465 21.874 22.927C24.0444 25.0975 26.9303 26.2929 29.9998 26.2929C33.0692 26.2929 35.955 25.0976 38.1255 22.927C42.6061 18.4465 42.6061 11.156 38.1255 6.67523C35.9552 4.50481 33.0695 3.30938 29.9998 3.30938Z" fill="#003B4A" class="secondary"></path>
      <path d="M26.2095 29.0457C26.1616 29.0457 26.1132 29.0437 26.0644 29.0393C25.154 28.9602 24.48 28.1581 24.559 27.2477L24.9469 22.7821C25.1036 20.9792 25.9455 19.3367 27.3176 18.1568L28.237 17.3665C30.2036 15.6757 32.9174 15.2323 35.3199 16.2092L36.738 16.7859C36.7496 16.7907 36.7613 16.7955 36.7729 16.8006L42.3837 19.2337C43.222 19.5972 43.6071 20.5717 43.2435 21.4101C42.8798 22.2483 41.9055 22.6339 41.0671 22.2699L35.4735 19.8445L34.073 19.2749C32.8252 18.7673 31.4157 18.9978 30.3946 19.8759L29.4753 20.6663C28.7625 21.2791 28.3254 22.1321 28.2442 23.0684L27.8563 27.5338C27.7811 28.3957 27.0585 29.0457 26.2095 29.0457Z" fill="#003B4A" class="secondary"></path>
      <path d="M17.1479 19.2306C16.4681 19.2306 15.8309 18.8085 15.5893 18.1314C15.2824 17.2706 15.7311 16.324 16.5918 16.0169L24.216 13.2969C24.3063 13.2648 24.3514 13.2006 24.3734 13.1524C24.3954 13.1042 24.4143 13.0283 24.3797 12.9389L23.3123 10.1855C22.9135 9.15608 23.0166 7.97788 23.5883 7.03393L26.8039 1.72206C27.277 0.940415 28.2944 0.69022 29.0763 1.16342C29.8581 1.63663 30.1081 2.65417 29.6349 3.43581L26.4192 8.74792C26.3753 8.82034 26.3674 8.91057 26.3979 8.98932L27.4654 11.7428C27.818 12.6525 27.7886 13.642 27.3827 14.5292C26.9767 15.4165 26.247 16.0858 25.3281 16.4137L17.7038 19.1338C17.5202 19.1995 17.3325 19.2306 17.1479 19.2306Z" fill="#003B4A" class="secondary"></path>
      <path d="M31.2009 14.926C31.1169 14.926 31.0319 14.9195 30.9463 14.9063C30.0431 14.7669 29.4241 13.9216 29.5636 13.0184L29.872 11.0211C30.1592 9.16037 31.4275 7.57963 33.1818 6.8956L39.2571 4.52642C40.1086 4.1942 41.0679 4.6156 41.3997 5.46697C41.7318 6.31845 41.3107 7.27775 40.4592 7.60986L34.384 9.97892C33.7258 10.2356 33.2502 10.8284 33.1425 11.5264L32.834 13.5237C32.7079 14.3412 32.0033 14.926 31.2009 14.926Z" fill="#003B4A" class="secondary"></path></g><defs><clipPath id="clip0_544_431"><rect width="60" height="60" fill="white"></rect></clipPath></defs></svg>`),
      this.sanitizer.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M59.4512 32.9759C53.2245 32.9759 48.1587 27.9101 48.1587 21.6832C48.1587 15.4565 53.2245 10.3907 59.4512 10.3907C65.6781 10.3907 70.7438 15.4565 70.7438 21.6832C70.7438 22.9603 69.7082 23.9959 68.4312 23.9959C67.1542 23.9959 66.1185 22.9603 66.1185 21.6832C66.1185 18.007 63.1274 15.0162 59.4512 15.0162C55.7749 15.0162 52.7842 18.0072 52.7842 21.6832C52.7842 25.3595 55.7751 28.3506 59.4512 28.3506C60.7282 28.3506 61.7638 29.3862 61.7638 30.6632C61.7638 31.9403 60.7284 32.9759 59.4512 32.9759Z" fill="#003B4A" class="secondary"></path><path d="M63.0439 74.7086H58.1832C54.37 74.7086 51.178 71.8508 50.7585 68.0608L48.3236 46.0836C48.2513 45.4298 48.4605 44.7762 48.8992 44.2864C49.3377 43.7964 49.9644 43.5162 50.6222 43.5162H68.2807C69.5577 43.5162 70.5933 44.5519 70.5933 45.8289C70.5933 47.1059 69.5577 48.1415 68.2807 48.1415H53.2053L55.356 67.5515C55.5155 68.9948 56.7311 70.0833 58.1835 70.0833H63.0442C64.3213 70.0833 65.3569 71.1189 65.3569 72.3959C65.3569 73.673 64.3211 74.7086 63.0439 74.7086Z" fill="#003B4A" class="secondary"></path>
      <path d="M70.078 55.741H48.8247V35.3141C48.8247 32.6908 50.9514 30.5641 53.5747 30.5641H65.3281C67.9514 30.5641 70.0781 32.6908 70.0781 35.3141V55.741H70.078Z" fill="#F7CF47" class="primary"></path>
      <path d="M70.0781 58.0536H48.8249C47.5478 58.0536 46.5122 57.0179 46.5122 55.7409V35.314C46.5122 31.4197 49.6806 28.2512 53.575 28.2512H65.3281C69.2225 28.2512 72.391 31.4197 72.391 35.314V55.7409C72.3908 57.0182 71.3552 58.0536 70.0781 58.0536ZM51.1374 53.4283H67.7652V35.314C67.7652 33.97 66.6717 32.8767 65.3278 32.8767H53.5747C52.2305 32.8767 51.1374 33.9701 51.1374 35.314V53.4283Z" fill="#003B4A" class="secondary"></path>
      <path d="M24.1412 74.7086H19.2805C15.4675 74.7086 12.2755 71.8508 11.8555 68.0609L9.42078 46.0836C9.34843 45.4298 9.55797 44.7762 9.9964 44.2861C10.4352 43.7962 11.0616 43.5162 11.7194 43.5162H29.3778C30.6548 43.5162 31.6905 44.5519 31.6905 45.8289C31.6905 47.1059 30.6548 48.1415 29.3778 48.1415H14.3025L16.4528 67.5519C16.6127 68.995 17.8281 70.0834 19.2806 70.0834H24.1414C25.4184 70.0834 26.4541 71.119 26.4541 72.3961C26.4541 73.6731 25.4183 74.7086 24.1412 74.7086Z" fill="#003B4A" class="secondary"></path>
      <path d="M31.1755 55.741H9.92188V35.3141C9.92188 32.6908 12.0486 30.5641 14.6719 30.5641H26.4253C29.0486 30.5641 31.1753 32.6908 31.1753 35.3141V55.741H31.1755Z" fill="#F7CF47" class="primary"></path>
      <path d="M31.1756 58.0536H9.92203C8.645 58.0536 7.60938 57.0179 7.60938 55.7409V35.314C7.60938 31.4197 10.7778 28.2512 14.6722 28.2512H26.4253C30.3197 28.2512 33.4881 31.4197 33.4881 35.314V55.7409C33.4883 57.0182 32.4527 58.0536 31.1756 58.0536ZM12.2348 53.4283H28.8627V35.314C28.8627 33.97 27.7692 32.8767 26.4253 32.8767H14.6722C13.328 32.8767 12.2348 33.9701 12.2348 35.314V53.4283Z" fill="#003B4A" class="secondary"></path>
      <path d="M20.549 32.9759C14.3221 32.9759 9.25635 27.9101 9.25635 21.6832C9.25635 15.4565 14.3221 10.3907 20.549 10.3907C26.7757 10.3907 31.8415 15.4565 31.8415 21.6832C31.8415 27.9101 26.7756 32.9759 20.549 32.9759ZM20.549 15.0161C16.8728 15.0161 13.8817 18.007 13.8817 21.6831C13.8817 25.3593 16.8728 28.3504 20.549 28.3504C24.2253 28.3504 27.216 25.3593 27.216 21.6831C27.216 18.0068 24.2251 15.0161 20.549 15.0161Z" fill="#003B4A" class="secondary"></path>
      <path d="M44.7559 79.9999H37.5685C33.3321 79.9999 29.7859 76.8247 29.3193 72.6141L26.0131 42.7719C25.9407 42.1182 26.15 41.4646 26.5887 40.9747C27.0271 40.4847 27.6539 40.2046 28.3117 40.2046H51.6879C52.965 40.2046 54.0006 41.2402 54.0006 42.5172C54.0006 43.7943 52.965 44.8299 51.6879 44.8299H30.8948L33.9165 72.1049C34.1231 73.9691 35.6929 75.3746 37.5682 75.3746H44.7556C46.0326 75.3746 47.0682 76.4102 47.0682 77.6873C47.0682 78.9643 46.0332 79.9999 44.7559 79.9999Z" fill="#003B4A"></path>
      <path d="M54.0674 55.7144H25.9321V31.9661C25.9321 28.4933 28.7474 25.6779 32.2204 25.6779H47.7796C51.2524 25.6779 54.0679 28.4932 54.0679 31.9661V55.7143H54.0674V55.7144Z" fill="red" class="primary"></path>
      <path d="M54.0676 58.027H25.9323C24.6553 58.027 23.6196 56.9914 23.6196 55.7144V31.9661C23.6196 27.2236 27.4781 23.3655 32.2203 23.3655H47.7795C52.522 23.3655 56.3801 27.2239 56.3801 31.9661V55.7145C56.3804 56.9917 55.3449 58.027 54.0676 58.027ZM28.2449 53.4016H51.7549V31.9661C51.7549 29.7739 49.9717 27.9908 47.7796 27.9908H32.2204C30.0282 27.9908 28.2451 29.7741 28.2451 31.9661V53.4016H28.2449Z" fill="#003B4A" class="secondary"></path>
      <path d="M39.9999 27.8427C32.3238 27.8427 26.0786 21.5975 26.0786 13.9214C26.0786 6.24531 32.3238 0 39.9999 0C47.676 0 53.9211 6.245 53.9211 13.9211C53.9211 21.5972 47.676 27.8427 39.9999 27.8427ZM39.9999 4.62547C34.8739 4.62547 30.7039 8.79547 30.7039 13.9211C30.7039 19.047 34.8739 23.217 39.9999 23.217C45.1258 23.217 49.2958 19.047 49.2958 13.9211C49.2958 8.79547 45.1258 4.62547 39.9999 4.62547Z" fill="#003B4A" class="secondary"></path></svg>`),
      this.sanitizer.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M53.5837 55.8119H14.4269C11.9167 55.8119 9.50569 54.6234 7.97674 52.6326L1.2395 43.8596C1.01227 43.5637 0.890041 43.2006 0.892268 42.8276L0.930706 36.1607C0.936096 35.2374 1.68622 34.4919 2.60919 34.4919C2.61071 34.4919 2.612 34.4919 2.61352 34.4919C4.60536 34.4971 7.46123 34.506 9.75518 34.5199C10.7673 34.526 11.6244 34.5327 12.2308 34.5402C13.5202 34.556 13.8667 34.5601 14.362 35.0543L24.2401 44.9324C25.3812 46.0736 27.238 46.0736 28.3791 44.9324L28.394 44.9175C29.5351 43.7765 29.5351 41.9197 28.394 40.7785L19.157 31.6894C18.0497 30.5998 16.5843 29.9997 15.031 29.9997H1.67848C0.751408 29.9998 0 29.2484 0 28.3213C0 27.3943 0.751408 26.6428 1.67848 26.6428H15.0309C17.4709 26.6428 19.7725 27.5852 21.5115 29.2968L30.7578 38.3952C33.2174 40.8548 33.2174 44.8411 30.7675 47.2912L30.7528 47.306C28.3026 49.756 24.3162 49.756 21.8663 47.306L12.4603 37.9C11.4014 37.8849 8.87264 37.8674 4.27794 37.8534L4.25239 42.2713L10.639 50.5878C11.5368 51.7569 12.9528 52.4549 14.4268 52.4549H53.5835C55.1973 52.4549 56.5104 51.1421 56.5104 49.5281V49.5071C56.5104 47.8933 55.1976 46.5802 53.5835 46.5802H37.3836C36.4567 46.5802 35.7051 45.8288 35.7051 44.9017C35.7051 43.9747 36.4565 43.2232 37.3836 43.2232H53.5834C57.0482 43.2232 59.8671 46.0421 59.8671 49.507V49.5279C59.8674 52.9931 57.0484 55.8119 53.5837 55.8119Z" fill="#003B4A" class="secondary"></path>
      //   <path d="M42.6089 37.29C51.2864 37.29 58.3208 30.2555 58.3208 21.578C58.3208 12.9006 51.2864 5.86609 42.6089 5.86609C33.9314 5.86609 26.897 12.9006 26.897 21.578C26.897 30.2555 33.9314 37.29 42.6089 37.29Z" fill="#F7CF47" class="primary"></path>
      //   <path d="M42.6098 38.969C33.0207 38.969 25.2192 31.1678 25.2192 21.5784C25.2192 11.9893 33.0204 4.18811 42.6098 4.18811C52.1989 4.18811 60.0001 11.9893 60.0001 21.5784C60.0003 31.1678 52.1989 38.969 42.6098 38.969ZM42.6098 7.54495C34.8716 7.54495 28.5762 13.8403 28.5762 21.5784C28.5762 29.3166 34.8718 35.612 42.6098 35.612C50.3478 35.612 56.6432 29.3164 56.6432 21.5784C56.6432 13.8404 50.3479 7.54495 42.6098 7.54495Z" fill="#003B4A" class="secondary"></path>
      //   <path d="M41.9635 29.991C39.1437 29.8971 36.8408 28.4402 36.8408 26.9363C36.8408 26.1373 37.5458 24.9625 38.4387 24.9625C39.4256 24.9625 40.2245 26.349 41.9635 26.6543V22.8476C39.8016 22.0252 37.2638 21.0148 37.2638 18.0069C37.2638 15.0226 39.4726 13.5893 41.9635 13.2369V12.579C41.9635 12.2501 42.3394 11.9446 42.8564 11.9446C43.3029 11.9446 43.7494 12.2501 43.7494 12.579V13.1665C45.2063 13.2135 47.9556 13.5894 47.9556 15.2108C47.9556 15.8453 47.5327 17.1376 46.4987 17.1376C45.7233 17.1376 45.2768 16.3856 43.7494 16.2682V19.699C45.8877 20.498 48.3785 21.6024 48.3785 24.7747C48.3785 27.6884 46.4987 29.4508 43.7494 29.8973V30.5787C43.7494 30.9077 43.3029 31.2132 42.8564 31.2132C42.3395 31.2132 41.9635 30.9077 41.9635 30.5787V29.991ZM42.1984 19.1349V16.3385C41.141 16.5501 40.6945 17.0905 40.6945 17.6544C40.6945 18.3359 41.3056 18.7589 42.1984 19.1349ZM43.5143 23.4821V26.6308C44.3133 26.4428 44.9478 25.9963 44.9478 25.1504C44.9478 24.3749 44.3603 23.8814 43.5143 23.4821Z" fill="#003B4A" class="secondary"></path> </svg>`)
    ],

  }

}
