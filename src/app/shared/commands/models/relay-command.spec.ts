import { Func } from '../../../core/language-extensions/types';
import { RelayCommand } from './relay-command';

describe('RelayCommand', () => {
  it('is created', () => {
    const expectedRelayCommand = new RelayCommand(() => {});
    expect(expectedRelayCommand).toBeTruthy();
  });

  describe('creating a RelayCommand', () => {
    // Arrange
    let sut: RelayCommand;

    describe('without a canExecute callback', () => {
      // Act
      beforeEach(() => {
        sut = new RelayCommand(() => {});
      });

      // Assert
      it('creates a RelayCommand', () => {
        expect(sut).toBeTruthy();
      });

      // Assert
      it('evaluates to canExecute=true', () => {
        expect(sut.canExecute).toBe(true);
      });
    });

    describe('with a canExecute callback', () => {
      let canExecuteCallback: Func<boolean>;

      describe('with evaluating to false', () => {
        beforeEach(() => {
          canExecuteCallback = () => false;
          sut = new RelayCommand(() => {}, canExecuteCallback);
        });

        it('evaluates to canExecute=false', () => {
          expect(sut.canExecute).toBe(false);
        });
      });

      describe('with evaluating to true', () => {
        beforeEach(() => {
          canExecuteCallback = () => true;
          sut = new RelayCommand(() => {}, canExecuteCallback);
        });

        it('evaluates to canExecute=true', () => {
          expect(sut.canExecute).toBe(true);
        });
      });
    });
  });
});
