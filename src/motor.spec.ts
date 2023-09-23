import * as motor from "./motor";
import { partida } from "./modelo";
import { vi } from "vitest";

describe("motor", () => {
  describe("dameMensajePorPuntuacion", () => {
    it("si el numero es del uno al 2 debería de devolver parece que no has entendido el juego", () => {
      //Arrange
      const resultadoEsperado = "Parece que no has entendido el juego";
      const puntuacion = 2;
      //Act
      const resultado = motor.dameMensajePorPuntuacion(puntuacion);
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("si el numero es del 2 al 4 debería de devolver ", () => {
      //Arrange
      const resultadoEsperado = "Parece que no has entendido el juego";
      const puntuacion = 3;
      //Act
      const resultado = motor.dameMensajePorPuntuacion(puntuacion);
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("si el numero es del 4 al 6 debería de devolver ", () => {
      //Arrange
      const resultadoEsperado = "bien, parece que lo estas entendiendo";
      const puntuacion = 5;
      //Act
      const resultado = motor.dameMensajePorPuntuacion(puntuacion);
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("si el numero es del 6 al 7 debería de devolver ", () => {
      //Arrange
      const resultadoEsperado = "bien hecho!!";
      const puntuacion = 6;
      //Act
      const resultado = motor.dameMensajePorPuntuacion(puntuacion);
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });
  });

  describe("hasSuperadoLaPuntuacion", () => {
    // Arrange
    it("si no superas la puntacion debe de dar false", () => {
      vi.spyOn(partida, "puntuacion", "get").mockReturnValue(2);

      // Act
      const resultado = motor.hasSuperadoLaPuntuacion();

      // Assert
      expect(resultado).toBe(false);
    });
  });
});

describe("MathRandom" ,() =>{
  it("Forzamos a Mathrandom a que devuelva 0 , debería de devolver 0", () => {
    //Arrange
    const numeroEsperado = 1;

    vi.spyOn(global.Math, "random").mockReturnValue(0);
    //Act
    const resultado = motor.dameCarta()
    //Assert
    expect(resultado).toBe(numeroEsperado)
  });

  it("Forzamos a Mathrandom a que devuelva 0.9999999 , debería de devolver 12", () => {
    //Arrange
    const numeroEsperado = 12;

    vi.spyOn(global.Math, "random").mockReturnValue(0.9999999);
    //Act
    const resultado = motor.dameCarta()
    //Assert
    expect(resultado).toBe(numeroEsperado)
  })
});

