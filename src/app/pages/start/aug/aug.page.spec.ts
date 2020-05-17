import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AugPage } from './aug.page';

describe('AugPage', () => {
  let component: AugPage;
  let fixture: ComponentFixture<AugPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
