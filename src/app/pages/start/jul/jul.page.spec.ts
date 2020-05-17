import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JulPage } from './jul.page';

describe('JulPage', () => {
  let component: JulPage;
  let fixture: ComponentFixture<JulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
