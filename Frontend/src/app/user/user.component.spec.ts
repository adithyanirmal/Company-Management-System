import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Testing Title", () =>{
    expect(component.componenetName).toBe("user")
  })

  it("Testing function", () =>{
    expect(component.sum(40,60)).toBe(100)
  })

  it("Testing html element", () =>{
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain("User")
  })

});
