class cubo{
  constructor(lado){
    this.lado = lado;
  };
  area(A){
    if(A == null){
      return this.lado**2;
    }else{
      this.lado = A**(1/2);
    };
  };
  volume(V){
  	if(V == null){
      return this.lado**3;
    }else{
      this.lado = V**(1/2);
    };
  };
};

class cilindro{
  constructor(raio,diametro,altura){
  	this.PI = Math.PI;
    this.raio = raio==null?diametro/2:raio;
    this.diametro = diametro==null?raio*2:diametro;
    this.altura = altura;
  };
  areaTotal(A){
    if(A == null){
      return 2*this.PI*this.raio*(this.raio+this.altura);
    }else{
      this.altura = A/(2*this.PI*this.raio**2);
    }
  };
  areaBase(A){
    return this.PI*this.raio**2;
  };
  areaLateral(A){
    if(A == null){
      return 2*this.PI*this.raio*this.altura;
    }else{
      this.altura = A/(2*this.PI*this.raio);
    };
  };
  volume(V){
  	if(A == null){
      return this.PI*this.altura*this.raio**2;
    }else{
      this.altura = V(this.PI*this.raio**2);
    };
  };
};

class esfera{
  constructor(raio,diametro,altura){
    this.PI = Math.PI;
    this.raio = raio==null?diametro/2:raio;
    this.diametro = diametro==null?raio*2:diametro;
  }
  area(A){
    return 4*this.PI*this.raio**2;
  };
  volume(V){
  	return (4/3)*this.PI*this.raio**3;
  }
}
class cone{
  constructor(raio,diametro,altura,geratriz){
    this.PI = Math.PI;
    this.raio = raio==null? (diametro!=null? diametro/2: null): raio;
    this.diametro = diametro==null? (raio!=null? raio*2: null): diametro;
    this.altura = altura==null? (geratriz!=null?((this.raio**2)*(this.geratriz**2))**(1/2):null):altura;
    this.geratriz = geratriz==null? (altura!=null?((this.raio**2)*(this.altura**2))**(1/2):null):geratriz;
  };
  area(A){
    return this.PI*this.raio*(this.raio+this.geratriz);
  };
  volume(V){
  	return (this.PI*(this.raio**2)*this.geratriz)/3;
  };
};

class piramide{
  constructor(lado1, lado2, altura, vertices, precisao){
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.altura = altura;
    this.vertices = vertices;
    this.precisao = precisao;
  };
  area(A){
    return (this.vertices*this.altura)/2;
  };
  areaBase(){
    return this.lado1*this.lado2/2*this.vertices;
  };
  volume(V){
  	return (this.areaBase()*this.altura)/3 ;
  };
};
