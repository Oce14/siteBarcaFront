import { Component } from '@angular/core';
import { Banner4Component } from '../../../elements/banners/banner-4/banner-4.component';
import { Header1Component } from '../../../elements/headers/header-1/header-1.component';
import { CallToAction1Component } from '../../../elements/call-to-action/call-to-action1/call-to-action1.component';
import { Footer1Component } from '../../../elements/footers/footer-1/footer-1.component';
import { ScrollTopButtonComponent } from '../../../elements/short-cods/scroll-top-button/scroll-top-button.component';
import { FaqAccordionComponent } from '../../../elements/faq-accordion/faq-accordion.component';
import { Header2Component } from "../../../elements/headers/header-2/header-2.component";
import { Footer2Component } from "../../../elements/footers/footer-2/footer-2.component";

interface typeofList {
  section_title: string,
  section_image: string,
  activeTab: number,
  section_custom_class: string,
  section_description: string,
  faqList: {
    title: string,
    desc: string
  }[],
}
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    Header1Component,
    Banner4Component,
    FaqAccordionComponent,
    CallToAction1Component,
    Footer1Component,
    ScrollTopButtonComponent,
    Header2Component,
    Footer2Component
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  bennre = {
    bgImage: 'assets/images/banner/bnr4.jpg',
    title: 'FAQ',
    classAdd: 'dz-bnr-inr-sm'
  }

  faqSection: typeofList[] = [
    {
      section_title: `Qui sommes-nous ?`,
      section_image: `assets/images/project/pic3.jpg`,
      activeTab: 0,
      section_custom_class: "",
      section_description: "Découvrez la mission et les valeurs de l'association Barca, engagée pour un impact durable dans les communautés locales.",
      faqList: [
        {
          title: 'Quelle est la mission principale de l’association ?',
          desc: 'Notre mission est de créer un impact positif et durable en soutenant des projets liés à l’éducation, à l’accès aux ressources essentielles, et au développement communautaire. Nous nous concentrons sur des initiatives concrètes telles que l’installation de toilettes sèches, la construction de salles de classe, et la mise en place de cultures durables.'
        },
        {
          title: 'Où se trouvent les projets de l’association ?',
          desc: 'Nos projets actuels se déroulent dans [lieu/zone géographique spécifique]. Nous travaillons en étroite collaboration avec les communautés locales pour répondre à leurs besoins spécifiques.'
        },
        {
          title: 'Qui bénéficie des actions de l’association ?',
          desc: 'Nos actions bénéficient principalement aux populations locales, en particulier aux enfants, aux familles, et aux membres de la communauté qui ont un accès limité à des ressources essentielles comme l’eau, l’éducation ou la nourriture.'
        }
      ]
    },
    {
      section_title: `Soutenir l'association`,
      section_image: `assets/images/project/pic2.jpg`,
      activeTab: 0,
      section_custom_class: "",
      section_description: "Apprenez comment vous pouvez aider l'association Barca à atteindre ses objectifs.",
      faqList: [
        {
          title: 'Comment puis-je soutenir l’association ?',
          desc: 'Vous pouvez nous soutenir de plusieurs manières :\n- Faire un don : Chaque contribution, même petite, fait une grande différence.\n- Devenir bénévole : Rejoignez nos équipes sur le terrain ou aidez-nous dans l’organisation.\n- Partager notre projet : Parlez de nous autour de vous et sur les réseaux sociaux !'
        },
        {
          title: 'Comment puis-je devenir bénévole ?',
          desc: 'Pour devenir bénévole, vous pouvez nous contacter via notre formulaire en ligne ou nous envoyer un email. Nous recherchons des personnes motivées, prêtes à donner un peu de leur temps et de leurs compétences pour faire une différence.'
        },
        {
          title: 'Quels types de partenariats acceptez-vous ?',
          desc: 'Nous collaborons avec des entreprises, des institutions éducatives, des associations partenaires, et des particuliers pour financer, coorganiser ou promouvoir nos actions. Si vous souhaitez devenir partenaire, contactez-nous !'
        }
      ]
    },
    {
      section_title: `Questions fréquentes`,
      section_image: `assets/images/project/pic6.jpg`,
      activeTab: 0,
      section_custom_class: "content-inner-2",
      section_description: "Vous avez des questions ? Voici les réponses aux interrogations les plus fréquentes.",
      faqList: [
        {
          title: 'Comment sont financés vos projets ?',
          desc: 'Nos projets sont financés grâce à la générosité de nos donateurs, aux subventions publiques ou privées, et à nos partenaires. Nous assurons une transparence totale sur l’utilisation des fonds pour garantir que chaque euro contribue directement à nos actions sur le terrain.'
        },
        {
          title: 'Puis-je visiter les sites de vos projets ?',
          desc: 'Oui, nous organisons parfois des visites pour nos partenaires et donateurs, selon la disponibilité et la situation locale. Contactez-nous pour en savoir plus et organiser une visite.'
        },
        {
          title: 'Vos actions respectent-elles l’environnement ?',
          desc: 'Absolument. Nous intégrons des pratiques durables dans tous nos projets, comme l’utilisation de toilettes sèches, l’installation de cultures respectueuses des sols, et la gestion éthique des ressources naturelles.'
        }
      ]
    }
  ];

}
