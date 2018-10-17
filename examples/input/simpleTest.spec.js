describe('Simple component', () => {
  describe('when renders', () => {

    describe('when renders a', () => {
      it('should actually render 2', () => {
        expect(1).toBe(1);
      });

      it('should actually render 2', () => {
        expect(1).toBe(1);
      });

      it('should actually render 2', () => {
        expect(1).toBe(1);
      });

      it('should actually render 3', () => {
        expect(1).toBe(1);
      });

      describe('when renders b', () => {
        it('should actually render', () => {
          expect(1).toBe(1);
        });
      });
    });
  });
});

describe('Simple component 2', () => {
  describe('when renders 2', () => {
    beforeEach(() => {
      // do stuff
    });

    it('should actually render 5', () => {
      expect(1).toBe(1);
    });

    describe('when renders a', () => {

      it('should actually render 6', () => {
        expect(1).toBe(1);
      });

      it('should actually render 7', () => {
        expect(1).toBe(1);
      });

      describe('when renders b', () => {
        it('should actually render 4', () => {
          expect(1).toBe(1);
        });
      });
    });
  });
});