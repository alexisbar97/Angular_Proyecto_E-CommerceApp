import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLikesPageComponent } from './my-likes-page.component';

describe('MyLikesPageComponent', () => {
  let component: MyLikesPageComponent;
  let fixture: ComponentFixture<MyLikesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLikesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLikesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
