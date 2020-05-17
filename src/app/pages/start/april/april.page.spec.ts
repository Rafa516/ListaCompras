import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprilPage } from './april.page';

describe('AprilPage', () => {
  let component: AprilPage;
  let fixture: ComponentFixture<AprilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
