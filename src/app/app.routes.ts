import { Routes } from '@angular/router';
import { Index1Component } from './pages/home/index-1/index-1.component';
import { Index2Component } from './pages/home/index-2/index-2.component';
import { Index3Component } from './pages/home/index-3/index-3.component';
import { AboutUsComponent } from './pages/pages/about-us/about-us.component';
import { AskAQuestionComponent } from './pages/pages/ask-a-question/ask-a-question.component';
import { CertificatesComponent } from './pages/pages/certificates/certificates.component';
import { ComingSoonComponent } from './pages/pages/coming-soon/coming-soon.component';
import { Error404Component } from './pages/pages/error-404/error-404.component';
import { FaqComponent } from './pages/pages/faq/faq.component';
import { HappyClientsComponent } from './pages/pages/happy-clients/happy-clients.component';
import { HowItWorksComponent } from './pages/pages/how-it-works/how-it-works.component';
import { MissionComponent } from './pages/pages/mission/mission.component';
import { TermsAndConditionComponent } from './pages/pages/terms-and-condition/terms-and-condition.component';
import { UnderMaintenanceComponent } from './pages/pages/under-maintenance/under-maintenance.component';
import { BecomeAVolunteerComponent } from './pages/pages/volunteer/become-a-volunteer/become-a-volunteer.component';
import { VolunteerComponent } from './pages/pages/volunteer/volunteer/volunteer.component';
import { BrowseFundraiserComponent } from './pages/fundraiser/browse-fundraiser/browse-fundraiser.component';
import { BecomeAFundraiserComponent } from './pages/fundraiser/become-a-fundraiser/become-a-fundraiser.component';
import { FundraiserDetailComponent } from './pages/fundraiser/fundraiser-detail/fundraiser-detail.component';
import { ProjectComponent } from './pages/project/project/project.component';
import { ProjectCategoriesComponent } from './pages/project/project-categories/project-categories.component';
import { ProjectSidebarComponent } from './pages/project/project-sidebar/project-sidebar.component';
import { ProjectStoryComponent } from './pages/project/project-story/project-story.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { BlogGridComponent } from './pages/blog/blog-grid/blog-grid.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: Index2Component },
  // Home ---
  { path: 'index', component: Index2Component },
  // { path: 'index-1', component: Index1Component },
  { path: 'index-2', component: Index2Component },
  // { path: 'index-3', component: Index3Component },
  // Pages --
  { path: 'about-us', component: AboutUsComponent },
  // { path: 'volunteer', component: VolunteerComponent },
  { path: 'become-a-volunteer', component: BecomeAVolunteerComponent },
  { path: 'faq', component: FaqComponent },
  // { path: 'certificates', component: CertificatesComponent },
  // { path: 'ask-a-question', component: AskAQuestionComponent },
  // { path: 'happy-clients', component: HappyClientsComponent },
  // { path: 'how-it-works', component: HowItWorksComponent },
  // { path: 'mission', component: MissionComponent },
  { path: 'terms-and-condition', component: TermsAndConditionComponent },
  // { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'under-maintenance', component: UnderMaintenanceComponent },
  { path: 'error-404', component: Error404Component },
  // Fundraiser --
  { path: 'browse-fundraiser', component: BrowseFundraiserComponent },
  { path: 'become-a-fundraiser', component: BecomeAFundraiserComponent },
  { path: 'fundraiser-detail/:id', component: FundraiserDetailComponent },
  // Project --
  { path: 'project', component: ProjectComponent },
  { path: 'project-categories', component: ProjectCategoriesComponent },
  // { path: 'project-sidebar', component: ProjectSidebarComponent },
  { path: 'project-story/:id', component: ProjectStoryComponent },
  // Blog --
  { path: 'blog', component: BlogComponent },
  // { path: 'blog-grid', component: BlogGridComponent },
  // { path: 'blog-list', component: BlogListComponent },
  { path: 'post/:id', component: BlogDetailsComponent },
  // Contact --
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: '**',
    redirectTo: 'error-404'
  }

];
