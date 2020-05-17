import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OctPage } from './oct.page';

describe('OctPage', () => {
  let component: OctPage;
  let fixture: ComponentFixture<OctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
